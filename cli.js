#!/usr/bin/env node
const program = require('commander');
const { convertHeaders } = require('./src/main');
const chalk = require('chalk');
const  {Base64} = require('js-base64');

async function main() {
    const logo = Base64.decode(`CiAgXyAgICBfICAgICAgICAgICAgICAgIF8gICAgICAgICAgICAgX19fX19fXyAgICAgICAgICBf
        IAogfCB8ICB8IHwgICAgICAgICAgICAgIHwgfCAgICAgICAgICAgfF9fICAgX198ICAgICAgICB8
        IHwKIHwgfF9ffCB8IF9fXyAgX18gXyAgX198IHwgX19fIF8gX18gICAgIHwgfCBfX18gICBfX18g
        fCB8CiB8ICBfXyAgfC8gXyBcLyBfYCB8LyBfYCB8LyBfIFwgJ19ffCAgICB8IHwvIF8gXCAvIF8g
        XHwgfAogfCB8ICB8IHwgIF9fLyAoX3wgfCAoX3wgfCAgX18vIHwgICAgICAgfCB8IChfKSB8IChf
        KSB8IHwKIHxffCAgfF98XF9fX3xcX18sX3xcX18sX3xcX19ffF98ICAgICAgIHxffFxfX18vIFxf
        X18vfF98CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
        ICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
        ICAgICAgICAK`)
    console.log(chalk.red(logo))
    program
        .usage("<option>")
        .name('header')
        .option('-c, --convert', 'Converts headers to JS format.')
        .option('-h, --help', 'Displays list of commands');

    program.parse();

    const options = program.opts();

    if (options.convert) await convertHeaders();
    else if (options.help) program.help()
    else program.help();
}

main()