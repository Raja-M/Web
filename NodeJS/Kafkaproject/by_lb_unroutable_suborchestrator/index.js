const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
  context.log(`--------------------------- Start of Sub Orchestrator ---------------------------`);

  var request = context.df.getInput();
  var chunkUnroutable = request.chunkUnroutable;
  var token = request.token;

  const parallelUnRoutableTasks = [];
  for (var ii = 0; ii < chunkUnroutable.length; ii++) {
    const unPlannedUnit = {};
    unPlannedUnit['token'] = token;
    unPlannedUnit['payload'] = chunkUnroutable[ii];
    parallelUnRoutableTasks.push(context.df.callActivity(
      "by_lb_update_unroutable_reason_activity",
      unPlannedUnit
    ));
  }

  var emailBody = '';
  try {
    const results = yield context.df.Task.all(parallelUnRoutableTasks);
  } catch (error) {
    var err = "</b><br>";
    for (var k = 0; k < error.errors.length; k++) {
      err += error.errors[k].message + "<br><br>";
    }
    emailBody += err;
  }
  context.log(`--------------------------- End of Sub Orchestrator ---------------------------`);
  return emailBody;
});
