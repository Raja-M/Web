const ByService = require("./by.service");
const tableName = process.env.AUTH_TABLE_NAME;
const azureTableUrl = process.env.AzureWebJobsStorage;

module.exports = async function (context) {

  try {
    const byUrl = eval(process.env["BYURL"]);
    const request = context.bindings.name;
    const token = request.token;

    const byService = new ByService(byUrl, token, context)

    const plan = request.plan;
    const startLoadActivityDate = new Date();
    const setToPlanFlag = parseFlag(request.setToPlanFlag);
    const setToRateFlag = parseFlag(request.setToRateFlag);
    const suspendLoadFlag = parseFlag(request.suspendLoadFlag);

    context.log("Started create_delivery_order_activity for : ", plan.identifiers.optimiserPlanReferenceId);
    context.log(`Flag values of setToRateFlag: ${setToRateFlag}, setToPlanFlag: ${setToPlanFlag}, suspendLoadFlag: ${suspendLoadFlag}`);

    var loadDto = {};

    if (checkBYLoadIdExists(plan)) {
      context.log(`Plan already has a BY loadId : ${plan.identifiers.byLoad.loadId}`)
      loadDto = createLoadDto(plan);
      const loadDetails = await byService.getLoadEntity(loadDto);

      if (!isEligibleLoad(loadDetails)) {
        const message = `Aborting by_wfp_load_activity for load ${loadDto.systemLoadID} as it is in ${loadDetails.currentLoadOperationalStatusEnumVal} status`;
        context.log(message);
        return {
          errorMessage: message
        };
      }

      if (isTenderRejectedLoad(loadDetails)) {
        await byService.processLoadReturnToPlanned(loadDto);
      }

      if (isAutoTenderedLoad(loadDetails)) {
        await byService.processAutoTender(loadDto, "ATPM_STOP");
      }

      if (isOpenLoad(loadDetails)) {
        await byService.processDeleteLeg(plan);
        await byService.processAssignToLoad(loadDto);
      } else {
        await byService.processAssignToPlannedLoad(loadDto);
      }
    } else {
      loadDto = await byService.processLoadCreate(request);
      await byService.processLoadUpdate(loadDto);
      await byService.processDeleteLeg(plan);
      await byService.processAssignToLoad(loadDto);
    }

    await byService.processMaintainEntityReferenceNumber(request, loadDto);

    if (setToRateFlag) {
      await byService.processLoadRate(loadDto);
    }

    if (setToPlanFlag) {
      await byService.processSetLoadToPlanned(loadDto);
    }

    if (suspendLoadFlag) {
      await byService.processLoadSuspend(loadDto);
    }

    const endLoadActivityDate = new Date();
    console.log(`Total Time Taken for a load = ${(endLoadActivityDate - startLoadActivityDate) / 1000} seconds`);
    return loadDto;
  } catch (err) {
    return {
      errorMessage: err.message
    };
  }

};

function createLoadDto(plan) {
  const systemShipmentLegIDs = [];
  var planStops = plan.stops;
  for (var i = 0; i < planStops.length; i++) {
    if (planStops[i].stopActivityType === 'PickLoaded') {
      for (var j = 0; j < planStops[i].units.length; j++) {
        if (!planStops[i].units[j].identifiers.byLoadId)
          systemShipmentLegIDs.push(planStops[i].units[j].identifiers.clientReferenceUnitId);
      }
    }
  }

  return {
    plan: plan,
    systemLoadID: plan.identifiers.byLoad.loadId,
    systemShipmentLegID: systemShipmentLegIDs
  }
}

function checkBYLoadIdExists(plan) {
  return plan.identifiers.byLoad && plan.identifiers.byLoad.loadId;
}

function isAutoTenderedLoad(loadDetails) {
  return loadDetails.currentLoadOperationalStatusEnumVal === "S_TENDERED" && loadDetails.carrierSequentialTenderStatusEnumVal === "CST_PROCESSING";
}

function isTenderRejectedLoad(loadDetails) {
  return loadDetails.currentLoadOperationalStatusEnumVal === "S_TENDER_REJECTED";
}

function isEligibleLoad(loadDetails) {
  return ["S_OPEN", "S_PLANNED", "S_TENDERED", "S_TENDER_REJECTED", "S_TENDER_ACCEPTED"].includes(loadDetails.currentLoadOperationalStatusEnumVal);
}

function isOpenLoad(loadDetails) {
  return loadDetails.currentLoadOperationalStatusEnumVal === "S_OPEN";
}

function parseFlag(flag) {
  return !!flag && flag.toString().toLowerCase() === 'true';
}