const imports = ['tree', 'leaf'];
imports.forEach(item => {
    const script = document.createElement('script');
    script.src = `${attribute['animate']}/${item}.js`;
    document.head.append(script);
});

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(attribute['theme']);
}
