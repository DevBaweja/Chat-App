let angle;
let length;
let rate;
let clicked = false;
const minAngle = 15;
const minLength = 75;
const maxAngle = 40;
const maxLength = 100;
const weight = 8;
const minWeight = 4;
const lengthFactor = 3 / 4;
const weightFactor = 2 / 3;

function setup() {
    createCanvas(640, 360);
    angle = minAngle;
    length = minLength;
    rate = +1;
    clicked = false;
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    translate(width / 2, height);
    angleMode(DEGREES);
    frameRate(10);
    angle += rate;
    length += rate;
    if (angle == maxAngle && length == maxLength) rate = -1;
    if (angle == minAngle && length == minLength) rate = +1;

    branch(length, weight);
}

function mouseClicked() {
    if (!clicked) {
        noLoop();
        clicked = true;
    } else {
        loop();
        clicked = false;
    }
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
