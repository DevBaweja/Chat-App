let max, candidate;
let total;
let coordinate;
let clicked;
let rate;

const initRate = 10;
const incRate = 10;
const minRate = 5;
const maxRate = 100;

const initCandidate = 5;
const incCandidate = 1;
const minCandidate = 1;
const maxCandidate = 10;

function setup() {
    createCanvas(640, 360);
    clicked = true;
    rate = initRate;
    candidate = initCandidate;
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

    coordinate[total] = generate(coordinate);
    point(coordinate[total].x, coordinate[total].y);
    total++;
    if (clicked || total > max) {
        // display();
        noLoop();
    }
}
const display = () => {
    strokeWeight(4);
    stroke(attribute['color']);
    background(attribute['theme']);
    for (let index = 0; index < total; index++) point(coordinate[index].x, coordinate[index].y);
};

const generate = coordinate => {
    const temp = new Array(candidate);
    const config = new Array(candidate);

    for (let index = 0; index < candidate; index++) {
        let newX = random(0, width);
        let newY = random(0, height);
        temp[index] = { x: newX, y: newY };
        strokeWeight(4);
        stroke(attribute['color']);
        point(newX, newY);
        config[index] = getClose(temp[index], coordinate);
        strokeWeight(2);
        let { x, y } = coordinate[config[index].index];
        line(newX, newY, x, y);
        noFill();
        ellipse(newX, newY, 2 * dist(newX, newY, x, y));
    }

    const fcand = maxDistance(config);
    stroke(0, 255, 0, 200);
    strokeWeight(6);
    let { x: newX, y: newY } = temp[fcand.index];
    point(newX, newY);
    strokeWeight(2);
    let { x, y } = coordinate[config[fcand.index].index];
    line(newX, newY, x, y);
    ellipse(newX, newY, 2 * dist(newX, newY, x, y));
    return temp[fcand.index];
};

const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const getClose = (temp, coordinate) => {
    const distance = new Array(total);
    for (let index = 0; index < total; index++)
        distance[index] = getDistance(temp.x, temp.y, coordinate[index].x, coordinate[index].y);
    return minDistance(distance);
};

const minDistance = distance => {
    let min = 0;
    for (let index = 1; index < distance.length; index++) {
        if (distance[index] < distance[min]) min = index;
    }
    return {
        index: min,
        distance: distance[min],
    };
};

const maxDistance = config => {
    let max = 0;
    for (let index = 1; index < config.length; index++) {
        if (config[index].distance > config[max].distance) max = index;
    }
    return {
        index: max,
        distance: config[max].distance,
    };
};

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
    if (key == KEY_W) {
        if (candidate < maxCandidate) candidate += incCandidate;
    }
    if (key == KEY_S) {
        if (candidate > minCandidate) candidate -= incCandidate;
    }
    if (keyCode == ENTER) {
        init();
    }
}
