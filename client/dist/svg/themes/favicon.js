// node script.js filename

const fs = require('fs');

const { argv } = process;
const filename = argv[argv.length - 1];

const validArgv = ['favicon'];

if (!validArgv.find(valid => valid === filename)) {
    console.log(`Error: ${filename}  is not an valid argument`);
    process.exit();
}

const init = {
    normal: 'normal',
    light: 'light',
    dark: 'dark',
};

const colors = {
    aqua: {
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
        normal: '#e1ad01',
        light: '#f0d73f',
        dark: '#c59906',
    },
    pink: {
        normal: '#ff1455',
        light: '#ff366e',
        dark: '#f10043',
    },
    forest: {
        normal: '#54bf78',
        light: '#6dc88b',
        dark: '#42af66',
    },
    orange: {
        normal: '#ff4f00',
        light: '#fd6721',
        dark: '#db4906',
    },
    teal: {
        normal: '#46c7ad',
        light: '#60cfb9',
        dark: '#37b49b',
    },
    carrot: {
        normal: '#f37e3b',
        light: '#f5935b',
        dark: '#f1691b',
    },
    grey: {
        normal: '#888',
        light: '#a2a2a2',
        dark: '#6f6f6f',
    },
};

// Loop
let template = fs.readFileSync(`./template/${filename}.template.svg`, 'utf-8');
Object.keys(colors).forEach(key => {
    let newTemplate = template;
    for (const type of ['normal', 'light', 'dark']) {
        var reg = new RegExp(init[type], 'g');
        newTemplate = newTemplate.replace(reg, colors[key][type]);
    }
    fs.writeFileSync(`./favicon/${filename}-${key}.svg`, newTemplate);
});

console.log(`File: ${filename} written successfully!`);