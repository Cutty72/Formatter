const chalk = require('chalk');


function convHeader(headers) {
    headers.forEach(oldHeaders => {
        let OldSplit = oldHeaders.split(": ")

        const NewHeaders = `${'"' + OldSplit[0] + '"'}: ${'"' + OldSplit[1] + '"' + ','}`
        return NewHeaders
    })
}


module.exports = { convHeader }