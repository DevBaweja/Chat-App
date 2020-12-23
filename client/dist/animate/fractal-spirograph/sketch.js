let time = 0;
let rate = 0.025;
let minRate = 0.01;
let maxRate = 0.05;
let incRate = 0.005;

const waveX = [];
const waveY = [];

const maxLength = 500;
let number = 5;
let minNumber = 1;
let maxNumber = 30;

function setup() {
    createCanvas(640, 360);
    frameRate(100);
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    strokeWeight(2);
    translate(width / 2, height / 2);
    fill(attribute['color']);
    ellipse(0, 0, 4);
    push();
    let x = 0;
    let y = 0;
    let radius;
    let initRadius = 200;
    for (let i = 1; i <= number; i++) {
        const n = 2 * i;
        radius = initRadius / n;
        noFill();
        strokeWeight(1);
        ellipse(0, 0, 2 * radius);

        nextx = (radius + radius / 2) * cos(i * time);
        nexty = (radius + radius / 2) * sin(i * time);

        translate(nextx, nexty);
        x += nextx;
        y += nexty;
        ellipse(0, 0, 4);
    }
    waveX.unshift(x);
    waveY.unshift(y);
    pop();

    beginShape();
    noFill();
    for (let index = 0; index < waveX.length; index++) {
        vertex(waveX[index], waveY[index]);
    }
    endShape();
    time += rate;
}

getIndex = index => {
    if (index % 2 != 0) return index;
    return -index;
};
