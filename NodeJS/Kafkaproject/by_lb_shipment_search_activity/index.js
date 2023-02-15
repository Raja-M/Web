const fetch = require("node-fetch");
const https = require("https");

module.exports = async function (context) {
    context.log("Started by_lb_shipment_search_activity");
    var request = context.bindings.name;
    var systemShipmentLegIDs = request.systemShipmentLegIDs
    var token = request.token;

    context.log("==========payload recieved for get shipment activity is ========", systemShipmentLegIDs);
    const URL = eval(process.env["BYURL"]) + "/shipmentLegs/search";

    const byPayload = {
        "select": {
            "name": [
                "shipmentNumber",
                "systemShipmentLegID",
                "shipmentDescription",
                "systemLoadID",
                "shipFromLocationCode",
                "shipToLocationCode",
                "systemPlanID",
                "flexibleQuantity1",
                "flexibleQuantity2",
                "scaledWeight",
                "volume",
                "pickupArrivalDateTime",
                "pickupDepartureDateTime",
                "dropArrivalDateTime",
                "dropDepartureDateTime",
                "shipment.commodityCode",
                "shipment.ReferenceNumber7",
                "shipment.ReferenceNumber9",
                "shipment.ReferenceNumber15",
                "shipment.ReferenceNumber17"
            ],
            "collection": [
                {
                    "name": "shipment.container",
                    "select": {
                        "name": [
                            "weightByFreightClassCode"
                        ]
                    }
                }
            ]
        },
        "filter": [
            {
                "name": "systemShipmentLegID",
                "op": "In",
                "value": [
                    "256947825"
                ]
            }
        ]
    };
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    byPayload['filter'][0]['value'] = systemShipmentLegIDs;
    var requestOptions = {
        method: 'POST',
        headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + token },
        agent: agent,
        body: JSON.stringify(byPayload)
    };

    context.log("============Request for BY shipment search =========", JSON.stringify(byPayload));
    const response = await fetch(URL, requestOptions);
    if (!response.ok) {
        context.log(`An error occurred while hitting get shipment BY api `);
        var responseJsonError = '';
        if (response.status === 400) {
            const responseJson = await response.json();
            responseJsonError = JSON.stringify(responseJson.errors);
        }
        throw new Error(`search shipment status: ${response.status} ${response.statusText} ${responseJsonError}`)
    }
    const responseJson = await response.json();
    var shipmentResponseJson;
    
    if ('data' in responseJson) {
       context.log(`Completed shipment  search activity : ${systemShipmentLegIDs} `);
        // context.log(`Completed  shipment search for scaledWeight: ${responseJson['data'][0]['scaledWeight']}`);
        shipmentResponseJson = responseJson['data'];
    } else {
        context.log("============Responce not received from BY API =========");
    }

    context.log(`End by_lb_shipment_search_activity`);
    return shipmentResponseJson;
};

