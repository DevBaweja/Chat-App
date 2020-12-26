// Keys
const KEY_W = 'w';
const KEY_D = 'd';
const KEY_S = 's';
const KEY_A = 'a';
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
    script.src = `${attribute['game']}/sketch.js`;
    document.head.append(script);
};

getData();
applyAnimate();
