const df = require("durable-functions");
let ByUtil = require("../common/util/ByUtil");
const https = require("https");
const { default: fetch } = require("node-fetch");
const byUtil = new ByUtil();
const tableName = process.env.AUTH_TABLE_NAME;
const azureTableUrl = process.env.AzureWebJobsStorage;

module.exports = async function (context) {
  context.log(`--------------------------- Start of Unroutable reason activity ---------------------------`);
  context.log("Started by_lb_update_unroutable_reason_activity with instance id ");
  var request = context.bindings.name;

  var unplannedUnit = request.payload;
  context.log("received unplanned units ", JSON.stringify(unplannedUnit));

  const REFERENCENUMBERURL = eval(process.env["BYURL"]) + "/referenceNumbers/maintain";

  const TOKENURL = eval(process.env["generateBYToken"]);
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  token = request.token;

  var referenceNumberEntityKey = unplannedUnit.clientReferenceUnitId;
  var requestPayload = {
    "referenceNumberUpdateData": [
      {
        "referenceNumberEntityIdShipmentNumberFlag": false,
        "referenceNumberEntityKey": referenceNumberEntityKey,
        "commodityPickSequenceNumber": 0,
        "referenceNumber": unplannedUnit['errorDetails'][0]['errorDescription'].substring(0, 120),
        "referenceNumberTypeCode": "UNROUTABLE REASON",
        "referenceNumberCategoryEnumVal": "RNC_LD_LEG_DETL",
        "referenceNumberActionEnumVal": "AT_ADD"
      }
    ]
  }
  var requestOptions = {
    method: 'POST',
    headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + token },
    agent: agent,
    body: JSON.stringify(requestPayload)
  };

  const start = new Date();
  console.log("==============payload of UNROUTABLE activity==============", JSON.stringify(requestPayload));
  const response = await fetch(REFERENCENUMBERURL, requestOptions);
  if (!response.ok) {
    context.log(`An error occurred while updating the unroutable reason, Response status: ${response.status} 
        ${response.statusText}`);

    var responseJSONErrors = '';
    if (response.status === 400) {
      const responseJson = await response.json();
      responseJSONErrors = JSON.stringify(responseJson.error);
    }
    throw new Error(`Unroutable for  : ${referenceNumberEntityKey}, response status: ${response.status} 
        ${response.statusText} ${responseJSONErrors}`)
  }
  const responseJson = await response.json();
  context.log("============received responce from Unroutable API call =========", responseJson);

  const stop = new Date();
  console.log(`Time Taken to update unroutable = ${(stop - start) / 1000} seconds`);
  context.log(`--------------------------- End of Unroutable reason activity ---------------------------`);
  return request;
};
