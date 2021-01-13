let values;
let size;
let w;
let rate;
let i, j;
let done;
let clicked;
let flow;

const initSize = 50;
const incSize = 10;
const minSize = 20;
const maxSize = 100;

const initRate = 25;
const incRate = 5;
const minRate = 5;
const maxRate = 100;

function setup() {
    createCanvas(640, 360);

    clicked = true;
    flow = true;
    rate = initRate;
    size = initSize;
    init(size);
}

const init = size => {
    i = 0;
    j = 0;
    w = floor(width / size);
    values = [];
    for (let x = 0; x < size; x++) values[x] = random(height / 8, height - height / 8);
};

const display = () => {
    stroke(attribute['color']);
    if (flow) values.forEach((value, index) => line(w * index, w * index + w, w * index, -value));
    if (!flow) values.forEach((value, index) => line(w * index, w * index + w, w * index, value - height));
};

function draw() {
    frameRate(rate);
    background(attribute['theme']);
    strokeWeight(floor(w / 2));
    strokeCap(ROUND);
    translate(floor(w / 2), height);
    sort();
    if (clicked) noLoop();
}

const sort = () => {
    display();
    if (i < values.length - 1) {
        if (values[j] > values[j + 1]) swap(j, j + 1);
        j++;
        if (j > size - i) {
            j = 0;
            i++;
        }
    }
};

const swap = (i, j) => {
    let temp = values[i];
    values[i] = values[j];
    values[j] = temp;
};

function keyPressed(event) {
    const { key } = event;
    if (key == KEY_D) {
        if (rate < maxRate) rate += incRate;
    }
    if (key == KEY_A) {
        if (rate > minRate) rate -= incRate;
    }
    if (key == KEY_S) {
        if (size > minSize) {
            size -= incSize;
            init(size);
        }
    }
    if (key == KEY_W) {
        if (size < maxSize) {
            size += incSize;
            init(size);
        }
    }
    if (keyCode == ENTER) {
        flow = !flow;
        init(size);
    }
}

function mouseClicked() {
    clicked = !clicked;
    if (clicked) noLoop();
    else loop();
}
