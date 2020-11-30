const { transformLeadsCsvToArray, transformMyemailCsvToArray } = require('./csv-parser');
const sendEmail = require("./email");
const getTxtMessage = require("./message-reader");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const sendHyperactiveMessage = async () => {
    const myEmails = await transformMyemailCsvToArray('my-emails.csv');
    myEmails.shift();
    let emailsArray = await transformLeadsCsvToArray('leads.csv');
    const message = await getTxtMessage('message.txt');
    // console.log(myEmails, emailsArray, message);

    let emailsStrings = [];
    while (emailsArray.length > 0) {
        const emailsArraySlice = emailsArray.splice(0, 150);
        emailsStrings.push(emailsArraySlice.join(','));
    }

    for (let i = 0; i < emailsStrings.length; i++) {
        sendEmail(myEmails[i].email, myEmails[i].password, emailsStrings[i], "TEST", message);
    }
};

module.exports = sendHyperactiveMessage;
