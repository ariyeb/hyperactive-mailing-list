const transformCsvToArray = require("./utils/csv-parser");
const sendEmail = require("./utils/email");
const getTxtMessage = require("./utils/message-reader");

// transformCsvToArray('leads.csv').then((emails) => {
//     console.log(emails);
// });

// getTxtMessage('message.txt').then((message) => {
//     console.log(message);
// });



const sendHyperactiveMessage = async (fromEmail, password) => {
    let emailsArray = await transformCsvToArray('leads.csv');
    const emailsString = emailsArray.join(",");
    const message = await getTxtMessage('message.txt');
    console.log(message);
    sendEmail(fromEmail, password, emailsString, "TEST", message);
};

sendHyperactiveMessage();
