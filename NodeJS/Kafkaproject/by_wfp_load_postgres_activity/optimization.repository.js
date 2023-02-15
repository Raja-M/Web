const pg = require('pg');
const format = require('pg-format');

class Repository {
    constructor(host, port, database, userName, password) {
        this.client = new pg.Client({
            host: host,
            port: port,
            database: database,
            user: userName,
            password: password
        });
    }

    async connect() {
        await this.client.connect();
    }

    async insertAll(optimizationMetadata) {
        console.log(`Inserting ${optimizationMetadata.length} records`)
        let result = [];
        for (let i = 0; i < optimizationMetadata.length; i++) {
            let data = [
                optimizationMetadata[i].plan.identifiers.loadId,
                optimizationMetadata[i].systemLoadID,
                optimizationMetadata[i].plan.identifiers.optimiserPlanReferenceId
            ];
            result.push(data);
        }

        let query = format('INSERT INTO wfp_by_load (load_id, by_load_id, optimization_id) VALUES %L', result);
        await this.client.query(query);
    }

    async batchInsert(optimizationMetadata, batchSize) {
        console.log(`------------------------ Start of batch insert to postgres -----------------------`);
        const recordsCount = optimizationMetadata.length;
        const start = new Date();
        while (optimizationMetadata.length > 0) {
            const batch = optimizationMetadata.splice(0, batchSize);
            await this.insertAll(batch);
        }
        const end = new Date();
        console.log(`Time taken for batch inserting ${recordsCount} records = ${(end - start) / 1000} seconds`)
        console.log(`------------------------ End of batch insert to postgres -----------------------`);
    }

    async end() {
        await this.client.end();
    }
}
module.exports = Repository