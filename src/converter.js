const chalk = require('chalk');


function convHeader(headers) {
    let oldHeaders = headers.split(": ")
    const newHeaders = `${'"' + oldHeaders[0] + '"'}: ${'"' + oldHeaders[1] + '"' + ','}`

    return newHeaders
}


module.exports = { convHeader }