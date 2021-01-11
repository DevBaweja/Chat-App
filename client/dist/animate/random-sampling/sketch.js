let max;
let total;
let coordinate;
let clicked;
let rate;

const initRate = 25;
const incRate = 10;
const minRate = 5;
const maxRate = 100;

function setup() {
    createCanvas(640, 360);
    clicked = true;
    rate = initRate;
    init();
}

const init = () => {
    max = 750;
    total = 0;
    coordinate = [];
    coordinate.push({ x: width / 2, y: height / 2 });
    total++;
};

function draw() {
    frameRate(rate);
    display();

    coordinate[total] = generate();
    point(coordinate[total].x, coordinate[total].y);
    total++;
    if (clicked || total > max) {
        display();
        noLoop();
    }
}
const display = () => {
    strokeWeight(4);
    stroke(attribute['color']);
    background(attribute['theme']);
    for (let index = 0; index < total; index++) point(coordinate[index].x, coordinate[index].y);
};

const generate = () => ({
    x: random(width),
    y: random(height),
});

function mouseClicked() {
    clicked = !clicked;
    if (clicked) noLoop();
    else {
        if (total >= max) init();
        loop();
    }
}

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
