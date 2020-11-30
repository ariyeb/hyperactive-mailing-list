const sendHyperactiveMessage = require("./utils/hyperactive-messages");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

sendHyperactiveMessage();
