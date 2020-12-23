let angle;
let length;
let rate;
let clicked;
let flow;
const initAngle = 25;
const initLength = 85;
const minAngle = 15;
const minLength = 75;
const maxAngle = 40;
const maxLength = 100;
const initRate = 1.5;
const minRate = 1;
const maxRate = 5;
const incRate = 0.5;
const weight = 8;
const minWeight = 3;
const lengthFactor = 3 / 4;
const weightFactor = 2 / 3;

function setup() {
    createCanvas(640, 360);
    angle = initAngle;
    length = initLength;
    rate = initRate;
    clicked = true;
    flow = false;
    frameRate(50);
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    translate(width / 2, height);
    angleMode(DEGREES);
    if (!flow) {
        angle += rate;
        length += rate;
    } else {
        angle -= rate;
        length -= rate;
    }
    if ((angle > maxAngle && length > maxLength) || (angle < minAngle && length < minLength)) flow = !flow;

    branch(length, weight);

    if (clicked) noLoop();
}

function mouseClicked() {
    clicked = !clicked;
    if (clicked) noLoop();
    else loop();
}

function keyPressed(event) {
    const { key } = event;
    if (key == KEY_D) {
        if (rate < maxRate) rate += incRate;
    }
    if (key == KEY_A) {
        if (rate > minRate) rate -= incRate;
    }
    if (keyCode == ENTER) flow = !flow;
}

const branch = (size, width) => {
    strokeWeight(width);
    line(0, 0, 0, -size);
    translate(0, -size);

    if (size > minWeight) {
        push();
        rotate(angle);
        branch(size * lengthFactor, width * weightFactor);
        pop();
        push();
        rotate(-angle);
        branch(size * lengthFactor, width * weightFactor);
        pop();
    }
};
