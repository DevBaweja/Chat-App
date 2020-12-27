let values;
let size;
let w;
let rate;
let i, j;

function setup() {
    createCanvas(640, 360);
    init();
}

const init = () => {
    rate = 200;
    size = 100;
    i = 0;
    j = size;
    w = floor(width / size);
    values = [];
    for (let x = 0; x < size; x++) values[x] = random(height);
};

const display = () => {
    stroke(attribute['color']);
    values.forEach((value, index) => line(w * index, w * index + w, w * index, -value));
};

function draw() {
    frameRate(rate);
    background(attribute['theme']);
    strokeWeight(floor(w / 2));
    strokeCap(ROUND);
    translate(floor(w / 2), height);
    // Display
    sort();
    display();
}

const sort = () => {
    if (i < values.length - 1) {
        if (values[j - 1] > values[j]) swap(j, j - 1);
        j--;
        if (j <= i) {
            j = values.length - 1;
            i++;
        }
    } else noLoop();
};

const swap = (i, j) => {
    let temp = values[i];
    values[i] = values[j];
    values[j] = temp;
};
