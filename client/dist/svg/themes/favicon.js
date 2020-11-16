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
    red: {
        light: '#fe5569',
        normal: '#fd122e',
        dark: '#df0d26',
    },
    aqua: {
        light: '#31f3fa',
        normal: '#01c0c8',
        dark: '#087d81',
    },
    green: {
        light: '#91f991',
        normal: '#0ad80a',
        dark: '#07b407',
    },
    blueberry: {
        light: '#71a4f7',
        normal: '#4286f4',
        dark: '#317efa',
    },
    peach: {
        light: '#f17878',
        normal: '#ef5b5b',
        dark: '#f14a4a',
    },
    blue: {
        light: '#8cabff',
        normal: '#0448ff',
        dark: '#063fdd',
    },
    pink: {
        light: '#f5649c',
        normal: '#f44286',
        dark: '#f32e7a',
    },
    purple: {
        light: '#d796fb',
        normal: '#a613f6',
        dark: '#920adb',
    },
    yellow: {
        light: '#f0d73f',
        normal: '#e1ad01',
        dark: '#c99a02',
    },
    lilac: {
        light: '#cb75eb',
        normal: '#b666d2',
        dark: '#af52d1',
    },
    forest: {
        light: '#6dc88b',
        normal: '#42af66',
        dark: '#389758',
    },
    orange: {
        light: '#fd6721',
        normal: '#db4906',
        dark: '#b93f06',
    },
    teal: {
        light: '#60cfb9',
        normal: '#37b49b',
        dark: '#2c947f',
    },
    carrot: {
        light: '#f5935b',
        normal: '#f37e3b',
        dark: '#f1732a',
    },
    maroon: {
        light: '#dd0b3c',
        normal: '#c70b37',
        dark: '#b10a31',
    },
    gold: {
        light: '#c5c74f',
        normal: '#9c9e3c',
        dark: '#838530',
    },
    blood: {
        light: '#ff366e',
        normal: '#f10043',
        dark: '#da023f',
    },
    grass: {
        light: '#0dc446',
        normal: '#089e37',
        dark: '#06812d',
    },
    metal: {
        light: '#9badbb',
        normal: '#738491',
        dark: '#5a666e',
    },
    grey: {
        light: '#a2a2a2',
        normal: '#6f6f6f',
        dark: '#565656',
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
