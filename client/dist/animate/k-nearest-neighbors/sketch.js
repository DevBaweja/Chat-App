let cells;
let num;
let k;
const size = 4;
const types = {
    positive: 'positive',
    negative: 'negative',
    neutral: 'neutral',
};

const p = 1 / 4;
const initNum = 400;
const incNum = 100;
const minNum = 200;
const maxNum = 600;
const initK = 10;
const incK = 5;
const maxK = 30;
const minK = 5;

function setup() {
    createCanvas(640, 360);
    k = initK;
    num = initNum;
    init();
}

const init = () => {
    // Generate Cells
    cells = [];
    for (let index = 0; index < num; index++) {
        let r = random();
        let x = random(width);
        let y = random(height);
        switch (true) {
            case r < p:
                cells.push(new Cell(x, y, types.positive));
                break;
            case r > 3 * p:
                cells.push(new Cell(x, y, types.negative));
                break;
            default:
                cells.push(new Cell(x, y));
        }
    }
};

function draw() {
    background(attribute['theme']);
    for (let index = 0; index < cells.length; index++) {
        cells[index].show();
    }
}

function mousePressed() {
    let x = mouseX;
    let y = mouseY;
    let cell = new Cell(x, y);
    knn(cell);
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
        if (num > minNum) {
            num -= incNum;
            init();
        }
    }
    if (key == KEY_S) {
        if (num < maxNum) {
            num += incNum;
            init();
        }
    }
    if (keyCode == ENTER) {
        init();
    }
}

const knn = cell => {
    // Getting Neighbors
    const neighbors = cells.map(other => ({ ...other, distance: dist(cell.x, cell.y, other.x, other.y) }));
    // Getting Nearest Neighbors
    neighbors.sort((a, b) => a.distance - b.distance);
    // Getting K Nearest Neighbors
    neighbors.splice(k);

    // Determine Type
    let positive = 0,
        negative = 0;
    neighbors.forEach(neighbor => {
        switch (neighbor.type) {
            case types.positive:
                positive += 1 / (neighbor.distance * neighbor.distance);
                break;
            case types.negative:
                negative += 1 / (neighbor.distance * neighbor.distance);
                break;
        }
    });
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
    cells.push(cell);
};

class Cell {
    constructor(x, y, type = types.neutral) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    show = () => {
        strokeWeight(2);
        stroke(attribute['color']);

        switch (this.type) {
            case types.positive:
                line(this.x, this.y - size, this.x, this.y + size);
            case types.negative:
                line(this.x - size, this.y, this.x + size, this.y);
        }
    };
}
