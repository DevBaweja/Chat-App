let cells;
let rows;
let cols;
let current;
let clicked;
let stack;
let size;
let done;
const initRate = 20;
const incRate = 4;
const minRate = 4;
const maxRate = 64;
const initSize = 40;
const incSize = 5;
const minSize = 20;
const maxSize = 80;

function setup() {
    createCanvas(640, 360);

    clicked = true;
    rate = initRate;
    size = initSize;
    initMaze();
}

const initMaze = () => {
    done = false;
    stack = [];
    rows = floor(height / size) - 1;
    cols = floor(width / size) - 1;
    // Generate Cells
    cells = new Array(rows);
    for (let x = 0; x < rows; x++) {
        cells[x] = new Array(cols);
    }
    // Fill cells
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            cells[x][y] = new Cell(x, y);
        }
    }

    current = cells[0][0];
    current.visited = true;
};

function draw() {
    background(attribute['theme']);
    frameRate(rate);

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            cells[x][y].show();
        }
    }

    current.highlight();
    const next = current.checkNeighbors();
    if (next) {
        stack.push(current);
        current.removeWalls(next);
        current = next;
        current.visited = true;
    } else if (stack.length) {
        current = stack.pop();
    } else {
        done = true;
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < cols; y++) {
                cells[x][y].show();
            }
        }
    }
    if (clicked) noLoop();
}

function mouseClicked() {
    clicked = !clicked;
    if (clicked) noLoop();
    else loop();
}
class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.top = true;
        this.right = true;
        this.bottom = true;
        this.left = true;
        this.visited = false;
    }

    show = () => {
        this.coordinateX = this.y * size + size / 4;
        this.coordinateY = this.x * size + size / 4;
        strokeWeight(2);
        stroke(attribute['color']);
        // Lines
        if (this.top) line(this.coordinateX, this.coordinateY, this.coordinateX + size, this.coordinateY);
        if (this.right)
            line(this.coordinateX + size, this.coordinateY, this.coordinateX + size, this.coordinateY + size);
        if (this.bottom)
            line(this.coordinateX + size, this.coordinateY + size, this.coordinateX, this.coordinateY + size);
        if (this.left) line(this.coordinateX, this.coordinateY + size, this.coordinateX, this.coordinateY);
        // Visited
        if (this.visited) {
            fill(attribute['themeMore']);
            noStroke();
            rect(this.coordinateX, this.coordinateY, size, size);
        }
    };

    highlight = () => {
        fill(attribute['color']);
        noStroke();
        rect(this.coordinateX, this.coordinateY, size, size);
    };

    checkIndex = (x, y) => {
        if (x < 0 || y < 0 || x > rows - 1 || y > cols - 1) return false;
        return true;
    };

    checkNeighbors = () => {
        let neighbors = [];

        // Top
        if (this.checkIndex(this.x - 1, this.y) && !cells[this.x - 1][this.y].visited)
            neighbors.push(cells[this.x - 1][this.y]);
        // Right
        if (this.checkIndex(this.x, this.y + 1) && !cells[this.x][this.y + 1].visited)
            neighbors.push(cells[this.x][this.y + 1]);
        // Bottom
        if (this.checkIndex(this.x + 1, this.y) && !cells[this.x + 1][this.y].visited)
            neighbors.push(cells[this.x + 1][this.y]);
        // Left
        if (this.checkIndex(this.x, this.y - 1) && !cells[this.x][this.y - 1].visited)
            neighbors.push(cells[this.x][this.y - 1]);

        if (neighbors.length) {
            return neighbors[floor(random(0, neighbors.length))];
        }
    };

    removeWalls = next => {
        // Top
        if (this.x - 1 == next.x && this.y == next.y) {
            this.top = false;
            next.bottom = false;
        }
        // Right
        if (this.x == next.x && this.y + 1 == next.y) {
            this.right = false;
            next.left = false;
        }
        // Bottom
        if (this.x + 1 == next.x && this.y == next.y) {
            this.bottom = false;
            next.top = false;
        }
        // Left
        if (this.x == next.x && this.y - 1 == next.y) {
            this.left = false;
            next.right = false;
        }
    };
}
