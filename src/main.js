const readline = require('readline');
const chalk = require('chalk');
const { convHeader } = require('./converter')


const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function convertHeaders() {
    rline.question('Paste Headers here: ', (header) => {
        if (header === '') { rline.close(); return; }

        try {
            console.log(chalk.green(convHeader(header)))
        }
        catch { console.log(chalk.red.underline("Failed to convert Headers!")); }

        rline.close();
    })
}

module.exports = { convertHeaders }


