// node script.js filename

const fs = require('fs');

const { argv } = process;
const filename = argv[argv.length - 1];

const validArgv = ['null', 'ideal'];

if (!validArgv.find(valid => valid === filename)) {
    console.log(`Error: ${filename}  is not an valid argument`);
    process.exit();
}

const colors = {
    dark: {
        normal: '#01c0c8',
        light: '#31f3fa',
        dark: '#087d81',
    },
    green: {
        normal: '#61f761',
        light: '#91f991',
        dark: '#31f531',
    },
    blue: {
        normal: '#4879ff',
        light: '#8cabff',
        dark: '#0448ff',
    },
    purple: {
        normal: '#be55f8',
        light: '#d796fb',
        dark: '#a613f6',
    },
    red: {
        normal: '#fd334c',
        light: '#fe5569',
        dark: '#fd122e',
    },
    yellow: {
        normal: '#e8de2a',
        light: '#ede558',
        dark: '#bab114',
    },
    grey: {
        normal: '#bbb',
        light: '#a2a2a2',
        dark: '#888',
    },
    white: {
        normal: '#fff',
        light: '#fff',
        dark: '#fff',
    },
};

const string = {
    start: `
    <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>`,
    end: `
    </defs>
    </svg>`,
};

// Loop
const template = fs.readFileSync(`./template/${filename}.template.svg`, 'utf-8');
let str = '';
str += string.start;
Object.keys(colors).forEach(key => {
    let newTemplate = '' + template;

    for (const type of ['normal', 'light', 'dark']) {
        var reg = new RegExp(colors.dark[type], 'g');
        newTemplate = newTemplate.replace(reg, colors[key][type]);
    }

    if (key !== 'dark') newTemplate = newTemplate.replace(`icon-${filename}-dark`, `icon-${filename}-dark-${key}`);

    str += newTemplate;
});
str += string.end;

fs.writeFileSync(`./${filename}.svg`, str);
console.log(`File: ${filename} written successfully!`);
