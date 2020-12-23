let path;
let k = -4;

let angle = 0;
let resolution = 1;
let rate = 0.025;
let minRate = 0.01;
let maxRate = 0.05;
let incRate = 0.005;

let number = 5;
let minNumber = 1;
let maxNumber = 30;

let root;
let final;
let radius = 75;
const radiusFactor = 3;

function setup() {
    createCanvas(640, 360);
    path = [];
    root = new Orbit(width / 2, height / 2, radius, 0);
    let next = root;
    for (let i = 0; i < number; i++) {
        next = next.addChild();
    }
    final = next;
}

function draw() {
    background(attribute['theme']);

    for (let i = 0; i < resolution; i++) {
        let next = root;
        while (next) {
            next.update();
            next = next.child;
        }
        path.push(createVector(final.x, final.y));
    }

    let next = root;
    while (next != null) {
        next.show();
        next = next.child;
    }

    beginShape();
    stroke(attribute['color']);
    strokeWeight(2);
    noFill();
    path.forEach(pos => vertex(pos.x, pos.y));
    endShape();
}

class Orbit {
    constructor(x, y, r, n, parent) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.n = n;
        this.parent = parent;
        this.child = null;
        this.speed = radians(pow(k, n - 1)) / resolution;
        this.angle = -PI / 2;
    }

    addChild = () => {
        let newr = this.r / radiusFactor;
        let newx = this.x + this.r + newr;
        let newy = this.y;
        this.child = new Orbit(newx, newy, newr, this.n + 1, this);
        return this.child;
    };

    update = () => {
        if (this.parent) {
            this.angle += this.speed;
            let rsum = this.r + this.parent.r;
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
