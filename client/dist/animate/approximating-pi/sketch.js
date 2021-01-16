let circle, square;
let pi;
let points;
let rate;
let clicked;
let r;
const types = {
    square: 'square',
    circle: 'circle',
};

const size = 20;
const iter = 10;
const initRate = 25;
const incRate = 10;
const minRate = 5;
const maxRate = 100;

function setup() {
    createCanvas(640, 360);
    rate = initRate;
    clicked = true;
    init();
}

const init = () => {
    points = [];
    square = 0;
    circle = 0;
    pi = 0;
};

function draw() {
    frameRate(rate);
    background(attribute['theme']);
    stroke(attribute['color']);

    let x = width / 4;
    let y = height / 2;

    // Text
    textSize(size);
    fill(attribute['color']);
    strokeWeight(0);
    text(pi, x + width / 3, y + size / 2);

    // Display
    strokeWeight(2);
    points.forEach(({ x, y, type }) => {
        switch (type) {
            case types.square:
                stroke(attribute['color']);
                break;
            case types.circle:
                stroke(attribute['themeMore']);
                break;
        }
        point(x, y);
    });

    let count = 0;
    while (count++ < iter) {
        generate();
    }

    stroke(attribute['color']);
    // Figure
    noFill();
    rectMode(CENTER);
    strokeWeight(2);
    r = (3 * height) / 4;
    rect(x, y, r, r);
    ellipse(x, y, r);

    if (clicked) noLoop();
}

function mouseClicked() {
    clicked = !clicked;
    if (clicked) noLoop();
    else loop();
}

const generate = () => {
    let x = random(width / 4 - r / 2, width / 4 + r / 2);
    let y = random(height / 2 - r / 2, height / 2 + r / 2);

    let type;
    type = types.square;

    square++;

    if (dist(width / 4, height / 2, x, y) < r / 2) {
        circle++;
        type = types.circle;
    }

    // Value
    if (circle != 0) pi = (4 * circle) / square;
    points.push({ x, y, type });
};

function keyPressed(event) {
    const { key } = event;
    if (key == KEY_D) {
        if (rate < maxRate) rate += incRate;
    }
    if (key == KEY_A) {
        if (rate > minRate) rate -= incRate;
    }
    if (keyCode == ENTER) {
        init();
    }
}
