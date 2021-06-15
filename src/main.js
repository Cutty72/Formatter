const readline = require('readline');
const chalk = require('chalk');
const { convHeader } = require('./converter')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const headers = [];

async function convertHeaders() {
    rl.setPrompt("Paste Headers here: \n")
    rl.prompt()

    rl.on('line', (header) => {
        headers.push(header)
    });
    rl.on('close', (cmd) => {
        try {
            convHeader(headers)
        } catch { console.log(chalk.red.underline("Failed to convert Headers!")); }
    })
}

module.exports = { convertHeaders }

