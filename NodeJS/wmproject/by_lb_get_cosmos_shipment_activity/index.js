const CosmosClient = require("@azure/cosmos").CosmosClient;

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const databaseId = process.env.COSMOS_DB;
const containerId = process.env.COSMOS_CONTAINER;

module.exports = async function (context) {
  var request = context.bindings.name;
  var systemShipmentLegIDs = request.systemShipmentLegIDs;

  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);
  console.log("Inside by cosmos get shipments======", systemShipmentLegIDs);
  // query to return all items
  const querySpec = {
    query: "SELECT * from c where  ARRAY_CONTAINS(@clientReferenceUnitId, c.identifiers.clientReferenceUnitId) and c.identifiers.batchId =@batchId ",
    parameters: [
      {
        name: "@clientReferenceUnitId",
        value: systemShipmentLegIDs
      },
      {
        name: "@batchId",
        value: request.batchId
      }
    ]
  };

  const { resources: results } = await container.items
    .query(querySpec)
    .fetchAll();

  return results;
};