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
    console.log(red(attribute['theme']));
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
                if (abs(a + b) > 4) break;
            }

            let bright = map(n, 0, maxIterations, 0, 1);
            if (attribute['themeType'] == 'light') bright = map(bright, 0, 1, green(attribute['theme']), 0);
            if (attribute['themeType'] == 'dark') bright = map(bright, 0, 1, green(attribute['theme']), 255);

            if (n == maxIterations) bright = 0;

            let pix = (x + y * width) * 4;
            let color = attribute['color'];
            if (!bright) {
                pixels[pix + 0] = red(color);
                pixels[pix + 1] = green(color);
                pixels[pix + 2] = blue(color);
            } else {
                pixels[pix + 0] = bright;
                pixels[pix + 1] = bright;
                pixels[pix + 2] = bright;
            }
            pixels[pix + 3] = 255;
        }
    }

    updatePixels();
    noLoop();
}
