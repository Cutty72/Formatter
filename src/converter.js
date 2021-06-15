const chalk = require('chalk');



function convHeader(headers) {
    let NewHeaders;

    console.clear()

    if(headers.length === 0) {
        console.log(chalk.red.underline("No Headers Entered!"))
    } else {
        console.log(chalk.magenta("\n----Formatted Headers----\n"))
        headers.forEach(oldHeaders => {
            let OldSplit = oldHeaders.split(": ")
            if (OldSplit[1].includes('"')) {
                NewHeaders = `${'"' + OldSplit[0] + '"'}: ${"'" + OldSplit[1] + "'" + ','}`
            } else {
                NewHeaders = `${'"' + OldSplit[0] + '"'}: ${'"' + OldSplit[1] + '"' + ','}`
            }
            console.log(chalk.green(NewHeaders))
        })
    }
}

module.exports = { convHeader }