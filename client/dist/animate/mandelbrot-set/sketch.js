const minX = -3;
const maxX = 2;
const minY = -1.5;
const maxY = 1.5;
const maxIterations = 100;

function setup() {
    createCanvas(640, 360);
    pixelDensity(1);
}

function draw() {
    loadPixels();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, minX, maxX);
            let b = map(y, 0, height, minY, maxY);

            let ca = a;
            let cb = b;
            let n = 0;

            while (n < maxIterations) {
                let aa = a * a - b * b;
                let bb = 2 * a * b;

                if (abs(a * a + b * b) > 12) break;

                a = aa + ca;
                b = bb + cb;
                n++;
            }

            let bright = map(n, 0, maxIterations, 0, 1);
            // According to Theme
            switch (attribute['themeType']) {
                case 'light':
                    bright = map(bright, 0, 1, green(attribute['theme']), 0);
                    break;
                case 'dark':
                    bright = map(bright, 0, 1, green(attribute['theme']), 255);
                    break;
            }
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
