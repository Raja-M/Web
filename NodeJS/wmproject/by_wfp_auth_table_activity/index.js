var storage = require('azure-storage');
const { default: fetch } = require("node-fetch");
const https = require("https");
var storageClient = storage.createTableService(process.env.AzureWebJobsStorage);
const tableName = process.env.AUTH_TABLE_NAME;
var entityGen;

module.exports = async function (context) {
  context.log(`Entering in Auth table create `, tableName);
  const TOKENURL = eval(process.env["generateBYToken"]);

  storageClient.createTableIfNotExists(tableName, function (error, createResult) {
    if (error) {
      console.log('Error while creating table', error);
    }

    if (createResult.isSuccessful) {
      console.log("Create Table operation executed successfully for: ", tableName);
    }
  });

  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  var requestOptions = {
    method: 'GET',
    headers: { "Authorization": "Basic " + "U1ZDX1dGUDpXRlBPUFQ=" },
    agent: agent
  };
  const response = await fetch(TOKENURL, requestOptions);
  const responseJson = await response.json();
  console.log("========received response from by token api====", responseJson);
  var timeStamp = responseJson['expiry'];
  var token = responseJson['value'];
  updateAuthToken(storageClient, tableName, token, timeStamp);

  return token;
};


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