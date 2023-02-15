const CosmosClient = require("@azure/cosmos").CosmosClient;

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = process.env.COSMOS_DB;
const containerId = process.env.COSMOS_CONTAINER_OPTIMIZATION;

module.exports = async function (context) {
    var request = context.bindings.name;
    var kafkaPayload = JSON.parse(request).payload;
    context.log(
        "started by_lb_update_optimization_activity  : ", JSON.stringify(kafkaPayload)
    );

    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    const start = new Date();
    // query to return all items
    const querySpec = {
        query: "SELECT * from c where c.batchId = @batchId ",
        parameters: [
            {
                name: "@batchId",
                value: kafkaPayload.requestInfo.clientReferenceIds[0]
            }
        ]
    };

    context.log(`optimizer adapter requestId  : `, kafkaPayload.requestInfo.optimizerAdapterRequestIds[0]);

    const { resources: results } = await container.items
        .query(querySpec)
        .fetchAll();

    if (results.length == 0) {
        context.log(`Could not fecth record for batch Id ${kafkaPayload.requestInfo.clientReferenceIds[0]} `, results);
    } else {
        const result = results[0];
        const { id, byOptReqId } = result;

        if ('errorInfo' in kafkaPayload) {
            result.status = "OPT_RUN_FAILED";
            result.message = "";
        } else if ('payloadLink' in kafkaPayload) {
            result.status = "WRT_BACK_STARTED";
        }
        const { resource: updatedItem } = await container
            .item(id, byOptReqId).replace(result);
        console.log(`updated record`, updatedItem);
    }
    const stop = new Date();
    console.log(`Time Taken to update optimization staus = ${(stop - start) / 1000} seconds`);

    return request;
};