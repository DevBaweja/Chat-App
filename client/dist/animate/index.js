// Getting Data From URL
const attribute = {};

const getData = () => {
    const [, attributeStr] = window.location.href.split('?');
    attributeStr.split('&').map(item => {
        const [key, value] = item.split('=');
        attribute[key] = value;
    });
};

//
const applyAnimate = () => {
    const script = document.createElement('script');
    script.src = `${attribute['animate']}/sketch.js`;
    document.head.append(script);
};

getData();
applyAnimate();
