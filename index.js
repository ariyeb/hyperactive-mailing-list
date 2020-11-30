const { transformLeadsCsvToArray, transformMyemailCsvToArray } = require('./utils/csv-parser');
const sendEmail = require("./utils/email");
const getTxtMessage = require("./utils/message-reader");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const sendHyperactiveMessage = async () => {
    const myEmails = await transformMyemailCsvToArray('my-emails.csv');
    myEmails.shift();
    let emailsArray = await transformLeadsCsvToArray('leads.csv');
    const emailsString = emailsArray.join(",");
    const message = await getTxtMessage('message.txt');

    let emailsStrings = [];
    while (emailsArray.length > 0) {
        const emailsArraySlice = emailsArray.splice(0, 150);
        emailsStrings.push(emailsArraySlice.join(','));
    }
    console.log(emailsStrings);

    for (let i = 0; i < myEmails.length; i++) {
        sendEmail(myEmails[i].email, myEmails[i].password, emailsStrings[i], "TEST", message);
    }

    // sendEmail("hyperactive.hightech2@gmail.com", "hyperactive321", emailsString, "TEST", message);
    // sendEmail(myEmails[5].email, myEmails[5].password, emailsString, "TEST", message);
};
sendHyperactiveMessage();
