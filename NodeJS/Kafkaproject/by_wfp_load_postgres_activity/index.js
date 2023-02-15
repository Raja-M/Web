
const Repository = require("./optimization.repository");
const tableName = process.env.AUTH_TABLE_NAME;
const azureTableUrl = process.env.AzureWebJobsStorage;

module.exports = async function (context) {
  const PG_HOST = process.env.PG_HOST;
  const PG_PORT = process.env.PG_PORT;
  const PG_DATABASE = process.env.PG_DATABASE;
  const PG_USER = process.env.PG_USER;
  const PG_PASSWORD = process.env.PG_PASSWORD;
  const PG_OPTIMIZATION_BATCH_SIZE = process.env.PG_OPTIMIZATION_BATCH_SIZE

  const optimizationMetadata = context.bindings.name;
  const repository = new Repository(PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD);

  context.log(`------------------ Start of by_wfp_load_postgres activity ------------------`)
  const start = new Date();
  await repository.connect();
  await repository.batchInsert(optimizationMetadata, PG_OPTIMIZATION_BATCH_SIZE);
  await repository.end();
  const end = new Date();
  console.log(`Time taken for by_wfp_load_postgres activity = ${(end - start) / 1000} seconds`)
  context.log(`------------------ End of by_wfp_load_postgres activity ------------------`)

};
