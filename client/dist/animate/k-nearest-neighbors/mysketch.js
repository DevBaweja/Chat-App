let cells;
let rows;
let cols;
let size;
let k;

const types = {
    positive: 'positive',
    negative: 'negative',
    neutral: 'neutral',
};

const p = 1 / 4;
const initSize = 20;
const incSize = 5;
const minSize = 10;
const maxSize = 40;
const initK = 3;
const maxK = 8;
const incK = 1;
const minK = 1;

function setup() {
    createCanvas(640, 360);
    size = initSize;
    k = initK;
    init();
}

const init = () => {
    rows = floor(height / size) - 1;
    cols = floor(width / size) - 1;
    // Generate Cells
    cells = new Array(rows);
    for (let x = 0; x < rows; x++) {
        cells[x] = new Array(cols);
    }
    // Assigning Cells
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            let r = random();
            switch (true) {
                case r < p:
                    cells[x][y] = new Cell(x, y, types.positive);
                    break;
                case r > 3 * p:
                    cells[x][y] = new Cell(x, y, types.negative);
                    break;
                default:
                    cells[x][y] = new Cell(x, y);
            }
        }
    }
};

function draw() {
    background(attribute['theme']);
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            cells[x][y].show();
        }
    }
}

function mousePressed() {
    let x = floor(mouseY / size);
    let y = floor(mouseX / size);
    if (cells[x][y].type != types.neutral) return;
    knn(cells[x][y]);
}

function keyPressed(event) {
    const { key } = event;
    if (key == KEY_D) {
        if (k < maxK) k += incK;
    }
    if (key == KEY_A) {
        if (k > minK) k -= incK;
    }
    if (key == KEY_W) {
        if (size > minSize) {
            size -= incSize;
            init();
        }
    }
    if (key == KEY_S) {
        if (size < maxSize) {
            size += incSize;
            init();
        }
    }
    if (keyCode == ENTER) {
        init();
    }
}

const edges = (x, y) => x < 0 || y < 0 || x >= rows || y >= cols;

const knn = cell => {
    // Getting Nearest Neighbour
    let start = { x: cell.x - k, y: cell.y - k };
    let end = { x: cell.x + k, y: cell.y + k };
    // Determine Type
    let positive = 0,
        negative = 0;
    for (let i = start.x; i <= end.x; i++) {
        for (let j = start.y; j <= end.y; j++) {
            if (!edges(i, j)) {
                switch (cells[i][j].type) {
                    case types.positive:
                        positive++;
                        break;
                    case types.negative:
                        negative++;
                        break;
                }
            }
        }
    }
    // Assigning
    let majority = max(positive, negative);
    switch (majority) {
        case positive:
            cell.type = types.positive;
            break;
        case negative:
            cell.type = types.negative;
            break;
    }
};

class Cell {
    constructor(x, y, type = types.neutral) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    show = () => {
        this.coordinateX = this.y * size + size / 4;
        this.coordinateY = this.x * size + size / 4;
        strokeWeight(2);
        stroke(attribute['color']);

        switch (this.type) {
            case types.positive:
                line(
                    this.coordinateX + size / 2,
                    this.coordinateY + size / 2 - size / 4,
                    this.coordinateX + size / 2,
                    this.coordinateY + size - size / 4
                );
            case types.negative:
                line(
                    this.coordinateX + size / 2 - size / 4,
                    this.coordinateY + size / 2,
                    this.coordinateX + size - size / 4,
                    this.coordinateY + size / 2
                );
        }
    };
}
