const chalk = require('chalk');



function convHeader(headers) {
    console.log(chalk.magenta("\n----Formatted Headers----\n"))
    headers.forEach(oldHeaders => {
        let OldSplit = oldHeaders.split(": ")

        const NewHeaders = `${'"' + OldSplit[0] + '"'}: ${'"' + OldSplit[1] + '"' + ','}`
        console.log(chalk.green(NewHeaders))
    })
}


module.exports = { convHeader }