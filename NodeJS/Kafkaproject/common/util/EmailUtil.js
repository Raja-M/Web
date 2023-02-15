const { default: fetch } = require("node-fetch");
class EmailUtil {

    async sendEmail(recipients, payload, environment, planId) {
        var requestPayload = payload;

        var emailServerEndpointURL = "http://google.com/us/applicationSvcs/v1/communication/sendEmail";
        const headers = new Map();
        headers.set("Sender", "noReply@gmail.com");
        headers.set("Recipients", recipients);
        headers.set("Subject", `WFP Load create Alert - Plan ${planId} - ${environment}`);
        headers.set("Content-Type", "text/html");
        headers.set("Accept-Language", "en-US");
        headers.set("Content-Language", "en-US");

        var requestOptions = {
            method: 'POST',
            headers: headers,
            body: requestPayload
        };

        const response = await fetch(emailServerEndpointURL, requestOptions);
        const responseJson = await response;
        console.log(`============ Email sent response ${responseJson.status} =========`);
        return responseJson;
    }

}
module.exports = EmailUtil;
