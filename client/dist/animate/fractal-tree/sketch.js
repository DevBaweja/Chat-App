const angle = 25;
const weight = 8;
const length = 90;
const minLength = 4;
const lengthFactor = 3 / 4;
const weightFactor = 2 / 3;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    translate(width / 2, height);
    angleMode(DEGREES);
    branch(length, weight);
}

const branch = (size, width) => {
    strokeWeight(width);
    line(0, 0, 0, -size);
    translate(0, -size);

    if (size > minLength) {
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
