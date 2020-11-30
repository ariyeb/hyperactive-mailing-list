const fs = require('fs');
const { resolve } = require('path');

const getTxtMessage = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) reject(err);

            resolve(data);
        });
    });
};

module.exports = getTxtMessage;
