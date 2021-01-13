let grid, next;
const Da = 2.0;
const Db = 1;
const feed = 0.055;
const kill = 0.062;

const center = -1;
const diagonal = 0.05;
const adjacent = 0.2;

let dt = 1;

function setup() {
    createCanvas(640, 360);
    pixelDensity(1);
    grid = [];
    next = [];
    for (let x = 0; x < width; x++) {
        grid[x] = [];
        next[x] = [];

        for (let y = 0; y < height; y++) {
            grid[x][y] = { a: 1, b: 0 };
            next[x][y] = { a: 1, b: 0 };
        }
    }

    for (let i = floor(width / 2 - width / 8); i < floor(width / 2 + width / 8); i++) {
        for (let j = floor(height / 2 - height / 8); j < floor(height / 2 + height / 8); j++) {
            grid[i][j].b = 1;
        }
    }
}
function draw() {
    background(attribute['theme']);

    for (let x = 0; x < width; x++)
        for (let y = 0; y < height; y++) {
            const { a, b } = grid[x][y];
            next[x][y].a = a + (Da * laplace(x, y, 'a') - a * b * b + feed * (1 - a)) * dt;
            next[x][y].b = b + (Db * laplace(x, y, 'b') + a * b * b - (kill + feed) * b) * dt;
            next[x][y].a = constrain(next[x][y].a, 0, 1);
            next[x][y].b = constrain(next[x][y].b, 0, 1);
        }
    loadPixels();
    for (let x = 0; x < width; x++)
        for (let y = 0; y < height; y++) {
            let px = (x + y * width) * 4;
            let a = next[x][y].a;
            let b = next[x][y].b;
            let c = floor((a - b) * 255);
            c = constrain(c, 0, 255);
            c = attribute['theme'];
            pixels[px + 0] = red(c);
            pixels[px + 1] = green(c);
            pixels[px + 2] = blue(c);
            pixels[px + 3] = 255;
        }
    updatePixels();
    swap();
}

const swap = () => {
    let temp = grid;
    grid = next;
    next = temp;
};

const valid = (x, y) => {
    if (x < 0 || y < 0 || x > width - 1 || y > height - 1) return false;
    return true;
};

const laplace = (x, y, type) => {
    let sum = 0;
    sum += grid[x][y][type] * center;
    if (valid(x - 1, y)) sum += grid[x - 1][y][type] * adjacent;
    if (valid(x + 1, y)) sum += grid[x + 1][y][type] * adjacent;
    if (valid(x, y - 1)) sum += grid[x][y - 1][type] * adjacent;
    if (valid(x, y + 1)) sum += grid[x][y + 1][type] * adjacent;
    if (valid(x - 1, y - 1)) sum += grid[x - 1][y - 1][type] * diagonal;
    if (valid(x + 1, y - 1)) sum += grid[x + 1][y - 1][type] * diagonal;
    if (valid(x + 1, y + 1)) sum += grid[x + 1][y + 1][type] * diagonal;
    if (valid(x - 1, y + 1)) sum += grid[x - 1][y + 1][type] * diagonal;
    return sum;
};
