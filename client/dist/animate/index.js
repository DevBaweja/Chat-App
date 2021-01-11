// Keys
const KEY_W = 'w';
const KEY_D = 'd';
const KEY_S = 's';
const KEY_A = 'a';
const KEY_R = 'r';
const KEY_T = 't';
const KEY_I = 'i';
// Getting Data From URL
const attribute = {};

const getData = () => {
    const [, attributeStr] = window.location.href.split('?');
    attributeStr.split('&').map(item => {
        const [key, value] = item.split('=');
        attribute[key] = value;
    });
};

const applyAnimate = () => {
    const script = document.createElement('script');
    script.src = `${attribute['animate']}/sketch.js`;
    document.head.append(script);
};

getData();
applyAnimate();
