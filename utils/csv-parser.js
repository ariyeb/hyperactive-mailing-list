const csv = require('csv-parser');
const { resolve } = require('dns');
const fs = require('fs');

const transformLeadsCsvToArray = (file) => {
    return new Promise((resolve, reject) => {
        const emails = [];

        fs.createReadStream(file)
            .pipe(csv(["email"]))
            .on('data', (email) => emails.push(email.email))
            .on('end', () => {
                resolve(emails);
            });
    });
};

const transformMyemailCsvToArray = (file) => {
    return new Promise((resolve, reject) => {
        const emails = [];

        fs.createReadStream(file)
            .pipe(csv(["email", "password"]))
            .on('data', (email) => emails.push(email))
            .on('end', () => {
                resolve(emails);
            });
    });
};

module.exports = {
    transformLeadsCsvToArray,
    transformMyemailCsvToArray
};

