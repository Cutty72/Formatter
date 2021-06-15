#!/usr/bin/env node
const program = require('commander');
const { convertHeaders } = require("./src/main");

async function main() {
    program
        .name('./cli.js')
        .option('-c, --convert', 'Converts headers to JS format.')
        .option('-h, --help', 'Displays list of commands');

    program.parse();

    const options = program.opts();

    if (options.convert) await convertHeaders();
    else if (options.help) program.help()
    else program.help();
}

main()









/*
:authority: www.footlocker.com
:method: GET
:path: /api/products/pdp/GY5601?timestamp=1623702716598
:scheme: https
accept: application/json
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9
referer: https://www.footlocker.com/product/reebok-question-low-boys-grade-school/GY5601.html
sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
sec-ch-ua-mobile: ?0
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-origin
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36
x-fl-request-id: 8ff10560-cd4f-11eb-85cc-d78280af2166
x-flapi-session-id: 16bv3y2hjtw3i1tn9zlm3atidq.fzcexflapipdb618883*/
