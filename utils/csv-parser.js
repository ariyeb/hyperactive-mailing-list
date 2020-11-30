const csv = require('csv-parser');
const { resolve } = require('dns');
const fs = require('fs');

const transformCsvToArray = (file) => {
    return new Promise((resolve, reject) => {
        const emails = [];

        fs.createReadStream(file)
            .pipe(csv(["email"]))
            .on('data', (email) => emails.push(email.email))
            .on('end', () => {
                // console.log(emails);
                resolve(emails);
            });
    });
};

module.exports = transformCsvToArray;

