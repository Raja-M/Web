const { default: fetch } = require("node-fetch");

class HttpUtil {
  fetchDataAndTime(requestUrl, requestOptions, activityType) {
    return this.wrapTimerAndCall(
      () => this.fetchData(requestUrl, requestOptions, this.defaultOnSuccess, this.defaultOnFailure, activityType),
      activityType
    );
  }

  async wrapTimerAndCall(callback, activityType) {
    const start = new Date();
    var response = await callback();
    const stop = new Date();
    console.log(`Time Taken to ${activityType} = ${(stop - start) / 1000} seconds`);
    return response;
  }

  async fetchData(requestUrl, requestOptions, onSuccess, onFailure, activityType) {
    const response = await fetch(requestUrl, requestOptions);
    if (!response.ok) await onFailure(requestOptions, response, activityType);
    return await onSuccess(requestOptions, response, activityType);
  }

  async defaultOnFailure(requestOptions, response, activityType) {
    console.log(`An error occurred while hitting ${activityType} api and status  ${response.status}  statusText : ${response.statusText}`);
    var responseJsonError = "";
    if (response.status === 400) {
      const responseJson = await response.json();
      responseJsonError = JSON.stringify(responseJson);
    }
    throw new Error(`Failed for ${activityType} for ${requestOptions.body} and response status code: ${response.status} ${response.statusText} ${responseJsonError}`);
  }

  async defaultOnSuccess(requestOptions, response, activityType) {
    console.log(`============= Response from ${activityType} for ${requestOptions.body}==============`);
    const responseJson = await response.json();
    console.log(JSON.stringify(responseJson));
    return responseJson;
  }
}
module.exports = new HttpUtil();
