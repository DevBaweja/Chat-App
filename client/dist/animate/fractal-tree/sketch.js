let angle;
let length;
let rate;
let clicked;
let flow;
const minAngle = 15;
const minLength = 75;
const maxAngle = 40;
const maxLength = 100;
const minRate = 1;
const maxRate = 4;
const weight = 8;
const minWeight = 3;
const lengthFactor = 3 / 4;
const weightFactor = 2 / 3;

function setup() {
    createCanvas(640, 360);
    angle = minAngle;
    length = minLength;
    rate = 1.5;
    clicked = false;
    flow = false;
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    translate(width / 2, height);
    angleMode(DEGREES);
    frameRate(100);
    if (!flow) {
        angle += rate;
        length += rate;
    } else {
        angle -= rate;
        length -= rate;
    }
    if ((angle > maxAngle && length > maxLength) || (angle < minAngle && length < minLength)) flow = !flow;

    branch(length, weight);
}

function mouseClicked() {
    if (!clicked) noLoop();
    else loop();
    clicked = !clicked;
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        if (rate < maxRate) rate += 0.5;
    }
    if (keyCode == DOWN_ARROW) {
        if (rate > minRate) rate -= 0.5;
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
