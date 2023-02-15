const { default: fetch } = require("node-fetch");
var storage = require('azure-storage');
var entityGen;
class ByUtil {

    async getToken(storageTableUrl, tableName, agent, TOKENURL) {
        var storageClient = storage.createTableService(storageTableUrl);
        var token;
        try {
            const result = await getData(storageClient, tableName);
            console.log("output", result.value._, result.expiryTime._);
            token = result.value._;
            var timeStamp = result.expiryTime._;
            const currentMilliseconds = Date.now();
            console.log("Time Stamp is ==== " + timeStamp);
            console.log("CurrentMilliSeconds is ==== " + currentMilliseconds);

            if (currentMilliseconds > timeStamp) {
                var requestOptions = {
                    method: 'GET',
                    headers: { "Authorization": "Basic " + "U1ZDX1dGUDpXRlBPUFQ=" },
                    agent: agent
                };
                const response = await fetch(TOKENURL, requestOptions);
                const responseJson = await response.json();
                console.log("========received response from by token api====", responseJson);
                timeStamp = responseJson['expiry'];
                token = responseJson['value'];
                updateAuthToken(storageClient, tableName, token, timeStamp);
            } else {
                console.log("Using the existing token as it was not expired");
            }

        } catch (error) {
            console.log('Error while getting BY token ' + error);
        }
        return token;
    }
}

async function getData(storageClient, tableName) {
    console.log(`Entering in read the table `);
    return new Promise((resolve, reject) => {
        storageClient.retrieveEntity(tableName, 'BYAuthToken', 'Bearer',
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

function updateAuthToken(storageClient, tableName, token, timeStamp) {
    console.log(`Entering in Auth table update `);
    entityGen = storage.TableUtilities.entityGenerator;
    var authEntity = createEntityDescriptor("BYAuthToken", "Bearer", token, timeStamp);

    storageClient.replaceEntity(tableName, authEntity, function (error, result) {
        if (!error) {
            console.log("Updated token succes")
        } else {
            console.log("failed " + result)
        }
    });
}

function createEntityDescriptor(partitionKey, rowKey, value, expiry) {
    var entity = {
        PartitionKey: entityGen.String(partitionKey),
        RowKey: entityGen.String(rowKey),
        value: entityGen.String(value),
        expiryTime: entityGen.String(expiry)

    };
    return entity;
}
module.exports = ByUtil;