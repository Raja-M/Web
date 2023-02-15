const df = require("durable-functions");
const https = require("https");
const got = require('got');
const { default: fetch } = require("node-fetch");
const { BlobServiceClient } = require("@azure/storage-blob");
const { mainModule } = require("process");
//const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_BLOB_CONNECTION);

module.exports = async function (context) {
  context.log("started by_lb_blob_activity");
  var payload = context.bindings.name;
  let planPayload = JSON.parse(payload).payload

  const url = planPayload.payloadLink.cloudURL;
  context.log("BLOB URL", url);
  // const containerName = planPayload.requestInfo.optimizerAdapterRequestIds[0];
  // const blobName = "plan";
  var blobPayload;

  // const containerClient = blobServiceClient.getContainerClient(containerName + "/output");
  // const blobClient = containerClient.getBlobClient(blobName);

  // const downloadBlockBlobResponse = await blobClient.download();

  // const downloaded = (
  //   await streamToBuffer(downloadBlockBlobResponse.readableStreamBody)
  // ).toString();

  const start = new Date();

  // try {
    const read = got.stream(url);
    const downloaded = (
      await streamToBuffer(read)
    ).toString();
    blobPayload = JSON.parse(downloaded);

    const stop = new Date();

    console.log(`Time Taken to execute = ${(stop - start) / 1000} seconds`);
    console.log("Data is fetched from Azure blob ");

  // } catch (err) {
  //   console.log("The blob download failed");
  // }
  context.log('end by_lb_blob_activity');
  return blobPayload;
};

async function streamToBuffer(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", (data) => {
      chunks.push(data instanceof Buffer ? data : Buffer.from(data));
    });
    readableStream.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on("error", reject);
  });
}