const imports = ['cell'];
imports.forEach(item => {
    const script = document.createElement('script');
    script.src = `${attribute['animate']}/${item}.js`;
    document.head.append(script);
});

let cells;
const size = 40;
let rows;
let cols;
let current;
let done = false;
const stack = [];

function setup() {
    createCanvas(640, 360);
    background(attribute['theme']);
    frameRate(10);

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
}

function draw() {
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
        noLoop();
    }
}
