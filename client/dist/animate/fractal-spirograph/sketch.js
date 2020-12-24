let path;
let k = -4;

let angle = 0;

let resolution;
const initResolution = 10;
const maxResolution = 20;
const minResolution = 1;
const incResolution = 1;

let rate;
const initRate = 40;
const incRate = 4;
const minRate = 4;
const maxRate = 100;

let number;
const initNumber = 4;
const minNumber = 2;
const maxNumber = 10;
const incNumber = 2;

let clicked;
let root;
let flow;
let final;
let radius;
const smallRadius = 75;
const largeRadius = 100;
const radiusFactor = 3;

function setup() {
    createCanvas(640, 360);
    rate = initRate;
    resolution = initResolution;
    clicked = false;
    flow = false;
    radius = smallRadius;
    initOrbit(initNumber);
}

const initOrbit = n => {
    number = n;
    path = [];
    root = new Orbit(width / 2, height / 2, radius, 0, null, flow);
    let next = root;
    for (let i = 0; i < number; i++) {
        next = next.addChild();
    }
    final = next;
};

function draw() {
    background(attribute['theme']);
    frameRate(rate);

    for (let i = 0; i < resolution; i++) {
        let next = root;
        while (next) {
            next.update();
            next = next.child;
        }
        path.unshift(createVector(final.x, final.y));
    }

    let next = root;
    while (next) {
        next.show();
        next = next.child;
    }

    beginShape();
    stroke(attribute['color']);
    strokeWeight(2);
    noFill();
    path.forEach(pos => vertex(pos.x, pos.y));
    endShape();
    if (clicked) noLoop();
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
        if (number < maxNumber) {
            number += incNumber;
            initOrbit(number);
        }
    }
    if (key == KEY_S) {
        if (number > minNumber) {
            number -= incNumber;
            initOrbit(number);
        }
    }
    if (keyCode == ENTER) {
        radius = flow ? smallRadius : largeRadius;
        flow = !flow;
        initOrbit(number);
    }
}

function mouseClicked() {
    clicked = !clicked;
    if (clicked) noLoop();
    else loop();
}

class Orbit {
    constructor(x, y, r, n, parent, flow) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.n = n;
        this.parent = parent;
        this.flow = flow;
        this.child = null;
        this.speed = radians(pow(k, n - 1)) / resolution;
        this.angle = -PI / 2;
    }

    addChild = () => {
        let newr = this.r / radiusFactor;
        let newx = this.x + this.r + newr;
        let newy = this.y;
        this.child = new Orbit(newx, newy, newr, this.n + 1, this, this.flow);
        return this.child;
    };

    update = () => {
        if (this.parent) {
            this.angle += this.speed;
            let value = this.flow ? -1 : +1;
            let rsum = this.r + value * this.parent.r;
            this.x = this.parent.x + rsum * cos(this.angle);
            this.y = this.parent.y + rsum * sin(this.angle);
        }
    };

    show = () => {
        stroke(attribute['color']);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
}
