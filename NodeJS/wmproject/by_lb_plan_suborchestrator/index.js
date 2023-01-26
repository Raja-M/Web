const df = require("durable-functions");
const ShipmentCompareService = require("./shipment-compare.service")

module.exports = df.orchestrator(function* (context) {

  const weightPositive = process.env.weightPositive;
  const weightNegative = process.env.weightNegative;
  const volumePositive = process.env.volumePositive;
  const volumeNegative = process.env.volumeNegative;

  context.log(`--------------------------- Start of Sub Plan Orchestrator ---------------------------`);

  const shipmentCompareService = new ShipmentCompareService(weightPositive, weightNegative, volumePositive, volumeNegative);

  var request = context.df.getInput();
  var plans = request.chunkPlan;
  const searchBYShipmentInput = {};
  const findCosmosShipment = {};

  searchBYShipmentInput['token'] = request.token;
  findCosmosShipment['batchId'] = request.batchId;

  const systemShipmentLegIDs = [];
  for (var ii = 0; ii < plans.length; ii++) {
    var planStops = plans[ii].stops;
    for (var i = 0; i < planStops.length; i++) {
      if (planStops[i].stopActivityType === 'PickLoaded') {
        for (var j = 0; j < planStops[i].units.length; j++) {
          systemShipmentLegIDs.push(planStops[i]['units'][j]['identifiers']['clientReferenceUnitId']);
        }
      }
    }
  }

  if (systemShipmentLegIDs.length === 0) {
    return "";
  }

  try {
    searchBYShipmentInput['systemShipmentLegIDs'] = systemShipmentLegIDs;
    findCosmosShipment['systemShipmentLegIDs'] = systemShipmentLegIDs;

    const shipment = yield context.df.callActivity(
      "by_lb_shipment_search_activity",
      searchBYShipmentInput
    );

    const byShipmentMap = new Map();
    if (shipment) {
      for (var i = 0; i < shipment.length; i++) {
        var document = shipment[i];
        byShipmentMap.set(document.systemShipmentLegID, document);
      }
    }

    const cosmosShipment = yield context.df.callActivity(
      "by_lb_get_cosmos_shipment_activity",
      findCosmosShipment
    );


    const cosmosShipmentMap = new Map();
    if (cosmosShipment) {
      for (var i = 0; i < cosmosShipment.length; i++) {
        var document = cosmosShipment[i];
        cosmosShipmentMap.set(document.identifiers.clientReferenceUnitId, document);
      }
    }

    const parallelTasks = [];
    for (var i = 0; i < plans.length; i++) {
      const createLoadInput = {};
      createLoadInput['earliestScheduledDate'] = request.earliestScheduledDate;
      createLoadInput['token'] = request.token;
      createLoadInput['plan'] = plans[i];
      createLoadInput['setToPlanFlag'] = request.setToPlanFlag;
      createLoadInput['setToRateFlag'] = request.setToRateFlag;
      createLoadInput['optmizationId'] = request.optmizationId;
      createLoadInput['optimizationStrategy'] = request.optimizationStrategy;
      var valueChanged = false;

      var planStops = plans[i].stops;
      for (var k = 0; k < planStops.length; k++) {
        if (planStops[k].stopActivityType === 'PickLoaded') {
          for (var jj = 0; jj < planStops[k].units.length; jj++) {
            const byShipment = byShipmentMap.get(planStops[k]['units'][jj]['identifiers']['clientReferenceUnitId']);
            const cosmosShipment = cosmosShipmentMap.get(planStops[k]['units'][jj]['identifiers']['clientReferenceUnitId']);
            valueChanged = shipmentCompareService.compareShipments(byShipment, cosmosShipment);
            console.log(`Shipment update value for shipment Leg Id ${planStops[k]['units'][jj]['identifiers']['clientReferenceUnitId']} is `, valueChanged);
            if (valueChanged) {
              break;
            }
          }
        }
      }
      createLoadInput['suspendLoadFlag'] = valueChanged;
      parallelTasks.push(context.df.callActivity("by_wfp_load_activity", createLoadInput));
    }

    var emailBody = '';
    const errorMessages = [];
    const successfulResults = [];

    const results = yield context.df.Task.all(parallelTasks);

    for (let i = 0; i < results.length; i++) {
      if (results[i].errorMessage) {
        errorMessages.push(results[i].errorMessage);
      } else {
        successfulResults.push(results[i]);
      }
    }

    if (errorMessages.length > 0) {
      var err = "</b><br>";
      for (var k = 0; k < errorMessages.length; k++) {
        err += errorMessages[k] + "<br><br>";
      }
      emailBody += err;
    }

    if (successfulResults.length > 0) {
      const postgresResult = yield context.df.callActivity("by_wfp_load_postgres_activity", successfulResults);
    }
  } catch (error) {
    var err = error + "<br><br>"
    emailBody += err;
  }

  if (emailBody.length > 0) {
    context.log("Errors in by_lb_plan_suborchestrator - " + emailBody)
  }
  context.log(`--------------------------- End of Sub Plan Orchestrator ---------------------------`);
  return emailBody;
});
