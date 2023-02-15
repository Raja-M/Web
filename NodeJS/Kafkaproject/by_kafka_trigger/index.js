const df = require("durable-functions");

module.exports = async function (context, event) {
  context.log(`--------------------------- Start of Kafka Trigger ---------------------------`);
  context.log(`${context.invocationId} : Entering Kafka Trigeer . Message received from Partition = ${event.Partition} 
  and Offset = ${event.Offset} topic =  ${event.Topic}  eventMessage : ${event.Value}`);
  const client = df.getClient(context);

  let headers = JSON.parse(event.Value).header;

  if (headers.eventName === 'WFP_OPTIMIZATION_RESPONSE') {
    const instanceId = await client.startNew(
      "by_lb_integration_orchestrator",
      undefined,
      event.Value
    );
  } else {
    context.log(`No matching flow to call for the event = ${headers.eventName}`);
  }

  context.log(`--------------------------- End of Kafka Trigger ---------------------------`);
  return client.createCheckStatusResponse(context.bindingData.req);
};
