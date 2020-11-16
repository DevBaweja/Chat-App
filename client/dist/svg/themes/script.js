// node script.js filename

const fs = require('fs');

// const { argv } = process;
// const filename = argv[argv.length - 1];

const validArgv = ['empty', 'ideal'];

/*
if (!validArgv.find(valid => valid === filename)) {
    console.log(`Error: ${filename}  is not an valid argument`);
    process.exit();
}
*/

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
        light: '#12f112',
        normal: '#0ad80a',
        dark: '#07b407',
    },
    blueberry: {
        light: '#7facf5',
        normal: '#4286f4',
        dark: '#317efa',
    },
    peach: {
        light: '#f18e8e',
        normal: '#ef5b5b',
        dark: '#f14a4a',
    },
    blue: {
        light: '#4c79f5',
        normal: '#0448ff',
        dark: '#063fdd',
    },
    pink: {
        light: '#fa78aa',
        normal: '#f44286',
        dark: '#f32e7a',
    },
    purple: {
        light: '#c260f7',
        normal: '#a613f6',
        dark: '#920adb',
    },
    metal: {
        light: '#9badbb',
        normal: '#738491',
        dark: '#5a666e',
    },
    gold: {
        light: '#c5c74f',
        normal: '#9c9e3c',
        dark: '#838530',
    },
    yellow: {
        light: '#f0d73f',
        normal: '#e1ad01',
        dark: '#c99a02',
    },
    lilac: {
        light: '#d189eb',
        normal: '#b666d2',
        dark: '#af52d1',
    },
    forest: {
        light: '#76c490',
        normal: '#42af66',
        dark: '#389758',
    },
    orange: {
        light: '#fc7c40',
        normal: '#db4906',
        dark: '#b93f06',
    },
    teal: {
        light: '#71c9b7',
        normal: '#37b49b',
        dark: '#2c947f',
    },
    carrot: {
        light: '#f39965',
        normal: '#f37e3b',
        dark: '#f1732a',
    },
    maroon: {
        light: '#c74765',
        normal: '#c70b37',
        dark: '#b10a31',
    },
    blood: {
        light: '#fa4a7c',
        normal: '#f10043',
        dark: '#da023f',
    },
    mud: {
        light: '#b16d3f',
        normal: '#965326',
        dark: '#6d3c1c',
    },
    grass: {
        light: '#0dc446',
        normal: '#089e37',
        dark: '#06812d',
    },

    grey: {
        light: '#a2a2a2',
        normal: '#6f6f6f',
        dark: '#565656',
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

validArgv.forEach(filename => {
    // Loop
    const template = fs.readFileSync(`./template/${filename}.template.svg`, 'utf-8');
    let str = '';
    str += string.start;
    Object.keys(colors).forEach(key => {
        let newTemplate = '' + template;

        for (const type of ['normal', 'light', 'dark']) {
            var reg = new RegExp(init[type], 'g');
            newTemplate = newTemplate.replace(reg, colors[key][type]);
        }

        newTemplate = newTemplate.replace(`icon-${filename}`, `icon-${filename}-${key}`);

        str += newTemplate;
    });
    str += string.end;

    fs.writeFileSync(`./${filename}.svg`, str);
    console.log(`File: ${filename} written successfully!`);
});
