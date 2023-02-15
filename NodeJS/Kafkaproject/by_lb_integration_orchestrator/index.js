const df = require("durable-functions");
const fs = require('fs');

let EmailUtil = require("../common/util/EmailUtil");
const emailUtil = new EmailUtil();
const tableName = process.env.AUTH_TABLE_NAME;


module.exports = df.orchestrator(function* (context) {
  context.log(`--------------------------- Start of Integration Orchestrator ---------------------------`);
  context.log("Started by_lb_integration_orchestrator with instance id : ", context.df.instanceId);

  const runPlansSequentiallyFlag = eval(process.env["runPlansSequentiallyFlag"]);
  const runUnroutablesSequentiallyFlag = eval(process.env["runUnroutablesSequentiallyFlag"]);

  const toEmails = eval(process.env["EMAIL_RECIPIENTS"]);
  const envName = eval(process.env["ENV"]);
  var emailBody;
  var planId;
  var unroutableCount;
  var loadCount;

  const firstRetryIntervalInMilliseconds = parseInt(
    process.env["firstRetryIntervalInMilliseconds"]
  );
  const maxNumberOfActivityAttempts = parseInt(
    process.env["maxNumberOfActivityAttempts"]
  );

  const setToPlanFlag = eval(process.env["setToPlanFlag"]);
  const setToRateFlag = eval(process.env["setToRateFlag"]);

  const retryOptions = new df.RetryOptions(
    firstRetryIntervalInMilliseconds,
    maxNumberOfActivityAttempts
  );

  try {
    var token = yield context.df.callActivityWithRetry(
      "by_wfp_auth_table_activity",
      retryOptions,
      tableName
    );

    const unroutableChunkSize = parseInt(
      process.env["UNROUTABLE_CHUNK_SIZE"]
    );

    const planChunkSize = parseInt(
      process.env["PLAN_CHUNK_SIZE"]
    );

    var kafkaPayLoad = context.df.getInput();

    var isErrorOccured = false;
    var isPlanErrorOccured = false;

    emailBody = "<b>WFP Load create Alert</b><br><br> Message received : <br><br>" + kafkaPayLoad;

    /*
    var payload = yield context.df.callActivityWithRetry(
      "by_lb_blob_activity",
      retryOptions,
      kafkaPayLoad
    );
    */

    var text = fs.readFileSync('/Users/vn54t6z/work/git/javascript/testdata/Payload_test.json');
    var payload = JSON.parse(text);

    var batchId = JSON.parse(kafkaPayLoad).payload.requestInfo.clientReferenceIds[0];
    var optmizationId = JSON.parse(kafkaPayLoad).payload.requestInfo.optimizerAdapterRequestIds[0];
    planId = payload.requestInfo.planId;
    var optimizationStrategy = payload.requestInfo.optimizationStrategy;

    var shipmentCosmosUpdatedresult = yield context.df.callActivityWithRetry(
      "by_lb_update_optimization_activity",
      retryOptions,
      kafkaPayLoad
    );

    if (payload) {
      if ('plans' in payload) {
        var plans = payload.plans;
        loadCount = plans.length;
        console.log("Size of plans is ", loadCount);
        emailBody += "<br><br> Total Load count : " + loadCount + "<br><br>";
        if (loadCount > 0) {
          var tempPlanMessage = '';
          const parallelOrchestrations = [];

          for (let i = 0; i < loadCount; i += planChunkSize) {
            const chunkPlan = plans.slice(i, i + planChunkSize);
            console.log("chunkPlan size = ", chunkPlan.length);
            const createLoadInput = {};
            createLoadInput['earliestScheduledDate'] = payload['plansAggregates']['earliestScheduledDate'] + 'T00:00:00';
            createLoadInput['token'] = token;
            createLoadInput['chunkPlan'] = chunkPlan;
            createLoadInput['setToPlanFlag'] = setToPlanFlag;
            createLoadInput['setToRateFlag'] = setToRateFlag;
            createLoadInput['batchId'] = batchId;
            createLoadInput['optmizationId'] = optmizationId;
            createLoadInput['optimizationStrategy'] = optimizationStrategy;
            parallelOrchestrations.push(context.df.callSubOrchestrator("by_lb_plan_suborchestrator", createLoadInput));
          }

          if (runPlansSequentiallyFlag) {
            for (let i = 0; i < parallelOrchestrations.length; i++) {
              try {
                const result = yield parallelOrchestrations[i];
                if (result.length > 0) {
                  tempPlanMessage += result;
                  isPlanErrorOccured = true;
                }
              } catch (error) {
                for (var k = 0; k < error.errors.length; k++) {
                  err += error.errors[k].message + "<br><br>";
                }
                tempPlanMessage += err;
              }
            }
            if (isPlanErrorOccured) {
              emailBody += "<b>Details - Load create</b><br>" + tempPlanMessage;
            }
          } else {
            try {
              const results = yield context.df.Task.all(parallelOrchestrations);

              for (let i = 0; i < parallelOrchestrations.length; i++) {
                const subPlanOrchestratorResults = results[i];
                console.log(`subPlanOrchestratorResults`, subPlanOrchestratorResults);
                if (subPlanOrchestratorResults.length > 0) {
                  tempPlanMessage += subPlanOrchestratorResults;
                  isPlanErrorOccured = true;
                }
              }

              if (isPlanErrorOccured) {
                emailBody += "<b>Details - Load create</b><br>" + tempPlanMessage;
              }
            } catch (error) {
              var err = "<b>Details - Load create - Unhandled</b><br>";
              for (var k = 0; k < error.errors.length; k++) {
                err += error.errors[k].message + "<br><br>";
              }
              emailBody += err;
            }
          }
        }
      } else {
        console.log("Plans is not available in the WFP output Json");
      }

      var payLoadUnplannedUnits = payload.unplannedUnits;
      unroutableCount = payLoadUnplannedUnits.length;
      console.log("Size of unroutable is ", unroutableCount);
      emailBody += "Total UnRoutable count : " + unroutableCount + "<br><br>";
      if (unroutableCount > 0) {
        var tempmessage = '';
        const parallelUnroutableOrchestrations = [];
        for (let i = 0; i < unroutableCount; i += unroutableChunkSize) {
          const chunkUnroutable = payLoadUnplannedUnits.slice(i, i + unroutableChunkSize);
          console.log("chunkUnroutable size = ", chunkUnroutable.length);

          const unroutableRequest = {};
          unroutableRequest['token'] = token;
          unroutableRequest['chunkUnroutable'] = chunkUnroutable;
          parallelUnroutableOrchestrations.push(context.df.callSubOrchestrator("by_lb_unroutable_suborchestrator", unroutableRequest));
        }

        if (runUnroutablesSequentiallyFlag) {
          for (let i = 0; i < parallelUnroutableOrchestrations.length; i++) {
            try {
              const result = yield parallelUnroutableOrchestrations[i];
              if (result.length > 0) {
                tempmessage += result;
                isErrorOccured = true;
              }
            } catch (error) {
              for (var k = 0; k < error.errors.length; k++) {
                err += error.errors[k].message + "<br><br>";
              }
              tempmessage += err;
            }
          }
          if (isErrorOccured) {
            emailBody += "<b>Details - Unroutable reason</b><br>" + tempmessage + "</b><br>";
          }
        } else {
          try {
            const unroutableResults = yield context.df.Task.all(parallelUnroutableOrchestrations);

            for (let i = 0; i < unroutableResults.length; i++) {
              const subOrchestratorResults = unroutableResults[i];
              console.log(`subOrchestratorResults`, subOrchestratorResults);
              if (subOrchestratorResults.length > 0) {
                tempmessage += subOrchestratorResults;
                isErrorOccured = true;
              }
            }

            if (isErrorOccured) {
              emailBody += "<b>Details - Unroutable reason</b><br>" + tempmessage + "</b><br>";
            }
          } catch (error) {
            var err = "<b>Details - Unroutable reason - Unhandled</b><br>";
            for (var k = 0; k < error.errors.length; k++) {
              err += error.errors[k].message + "<br><br>";
            }
            emailBody += err;
          }
        }
      }
    }

    const optmizationUpdateRequest = {};
    optmizationUpdateRequest['status'] = "COMPLETED";
    optmizationUpdateRequest['batchId'] = batchId;
    var optimizationUpdatedresponse = yield context.df.callActivity("by_lb_optimization_activity", optmizationUpdateRequest);
    if (isErrorOccured || isPlanErrorOccured) {
      emailBody += "<br><b>***THIS IS AN AUTOMATED RESPONSE. ***DO NOT RESPOND TO THIS EMAIL***</b>";
      emailUtil.sendEmail(toEmails, emailBody, envName, planId);
    } else {
      emailBody += "<b>BY Write back completed for above message </b> <br><br> <b>***THIS IS AN AUTOMATED RESPONSE. ***DO NOT RESPOND TO THIS EMAIL*** </b>";
      emailUtil.sendEmail(toEmails, emailBody, envName, planId);
    }
    context.log("Completed by_lb_integration_orchestrator with instance id : ", context.df.instanceId);

  } catch (error) {
    var err = "<b>Unhandled exceptions</b><br>";
    for (var k = 0; k < error.errors.length; k++) {
      err += error.errors[k].message + "<br><br>";
    }
    emailBody += err;
    emailBody += "<br><b>***THIS IS AN AUTOMATED RESPONSE. ***DO NOT RESPOND TO THIS EMAIL***</b>";
    emailUtil.sendEmail(toEmails, emailBody, envName, planId);
    context.log("Error from the message " + error);
  }

  context.log(`--------------------------- End of Integration Orchestrator -------------for batch Id ${batchId}`);
  return kafkaPayLoad;
});
