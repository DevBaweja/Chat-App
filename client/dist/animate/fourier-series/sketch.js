let time = 0;
let rate = 0.025;
let minRate = 0.01;
let maxRate = 0.05;
let incRate = 0.005;

const wave = [];
const maxLength = 500;
let number = 3;
let minNumber = 1;
let maxNumber = 8;

function setup() {
    createCanvas(640, 360);
    frameRate(100);
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    strokeWeight(2);
    translate(width / 4, height / 2);
    ellipse(0, 0, 4);

    let x = 0;
    let y = 0;
    let radius;
    let initRadius = 75 * (4 / PI);
    for (let i = 0; i < number; i++) {
        let prevX = x;
        let prevY = y;
        const n = 2 * i + 1;
        radius = 75 * (4 / (n * PI));

        x += radius * cos(n * time);
        y += radius * sin(n * time);

        noFill();
        strokeWeight(1);
        ellipse(prevX, prevY, 2 * radius);
        strokeWeight(2);
        line(prevX, prevY, x, y);
        ellipse(x, y, 4);
    }

    wave.unshift(y);

    translate(2 * initRadius, 0);

    let initial = wave[0];
    line(x - 2 * initRadius, y, 0, initial);
    fill(attribute['color']);
    ellipse(0, initial, 8);

    beginShape();
    noFill();
    for (let index = 0; index < wave.length; index++) {
        vertex(index, wave[index]);
    }
    endShape();

    line(x, y, wave[0]);
    if (wave.length > maxLength) wave.pop();

    time += rate;
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        if (number < maxNumber) number++;
    }
    if (keyCode == DOWN_ARROW) {
        if (number > minNumber) number--;
    }
    if (keyCode == LEFT_ARROW) {
        if (rate > minRate) rate -= incRate;
    }
    if (keyCode == RIGHT_ARROW) {
        if (rate < maxRate) rate += incRate;
    }
}
