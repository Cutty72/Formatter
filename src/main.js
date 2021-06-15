const readline = require('readline');
const chalk = require('chalk');
const { convHeader } = require('./converter')


const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const headers = [];

async function convertHeaders() {
    rline.setPrompt("Paste Headers here: ")
    rline.prompt()

    rline.on('line', (header) => {
        headers.push(header)
    });
    rline.on('close', (cmd) => {
        try {
            convHeader(headers)
        } catch { console.log(chalk.red.underline("Failed to convert Headers!")); }
    })
}

module.exports = { convertHeaders }

