const CosmosClient = require("@azure/cosmos").CosmosClient;

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = process.env.COSMOS_DB;
const containerId = process.env.COSMOS_CONTAINER_OPTIMIZATION;

module.exports = async function (context) {
    var request = context.bindings.name;
    context.log("started by_lb_optimization_activity for ",request.batchId,request.status);

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
                value: request.batchId
            }
        ]
    };


    const { resources: results } = await container.items
        .query(querySpec)
        .fetchAll();

    if (results.length == 0) {
        context.log(`Could not fecth record for batch Id ${request.batchId} `, results);
    } else {
        const result = results[0];
        const { id, byOptReqId } = result;
       
        result.status = request.status;
       
        const { resource: updatedItem } = await container
            .item(id, byOptReqId).replace(result);
        console.log(`updated record`, updatedItem);
    }
    const stop = new Date();
    console.log(`Time Taken to update optimization staus = ${(stop - start) / 1000} seconds`);

    return request;
};