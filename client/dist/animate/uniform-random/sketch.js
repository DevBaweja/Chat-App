let max, candidate;
let total;
let coordinate;

function setup() {
    createCanvas(640, 360);
    max = 750;
    candidate = 5;
    total = 0;
    coordinate = [];
    coordinate.push({ x: width / 2, y: height / 2 });
    total++;
}

function draw() {
    console.log(total);
    background(attribute['theme']);
    stroke(attribute['color']);
    strokeWeight(4);

    for (let index = 0; index < total; index++) point(coordinate[index].x, coordinate[index].y);

    coordinate[total] = generate(coordinate);
    point(coordinate[total].x, coordinate[total].y);
    total++;
    if (total >= max) noLoop();
}

const generate = coordinate => {
    const temp = new Array(candidate);
    const config = new Array(candidate);

    for (let index = 0; index < candidate; index++) {
        temp[index] = { x: random(0, width), y: random(0, height) };
        strokeWeight(4);
        stroke(attribute['color']);
        point(temp[index].x, temp[index].y);
        config[index] = getClose(temp[index], coordinate);
        strokeWeight(2);
        line(temp[index].x, temp[index].y, coordinate[config[index].index].x, coordinate[config[index].index].y);
    }

    const fcand = maxDistance(config);
    stroke(0, 255, 0, 200);
    strokeWeight(6);
    point(temp[fcand.index].x, temp[fcand.index].y);
    strokeWeight(2);
    line(
        temp[fcand.index].x,
        temp[fcand.index].y,
        coordinate[config[fcand.index].index].x,
        coordinate[config[fcand.index].index].y
    );
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
