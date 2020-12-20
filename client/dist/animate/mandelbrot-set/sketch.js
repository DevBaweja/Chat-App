/*
const imports = ['tree', 'leaf'];
imports.forEach(item => {
    const script = document.createElement('script');
    script.src = `${attribute['animate']}/${item}.js`;
    document.head.append(script);
});
*/
const minX = -2.5;
const maxX = 2.5;
const minY = -1.5;
const maxY = 1.5;
const maxIterations = 100;

function setup() {
    createCanvas(640, 360);
    pixelDensity(1);
    console.log('Here');
}

function draw() {
    // background(attribute['theme']);
    loadPixels();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, minX, maxX);
            let b = map(y, 0, height, minY, maxY);

            let ca = a;
            let cb = b;
            let n = 0;

            while (n < maxIterations) {
                var aa = a * a - b * b;
                var bb = 2 * a * b;

                a = aa + ca;
                b = bb + cb;
                n++;
                if (abs(a + b) > 36) break;
            }

            let bright = map(n, 0, maxIterations, 0, 1);
            bright = map(sqrt(bright), 0, 1, 0, 255);

            if (n == maxIterations) bright = 0;

            var pix = (x + y * width) * 4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
    }

    updatePixels();
    noLoop();
}
