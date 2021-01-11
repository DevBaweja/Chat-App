let circles;
let rate;

const total = 2;
const margin = 32;
const distanceMargin = 2;
const maxAttempts = 20;
const initRate = 25;
const incRate = 10;
const minRate = 5;
const maxRate = 100;

function preload() {
    img = loadImage('assets/chatfuel.jpg');
}

function setup() {
    createCanvas(640, 360);
    rate = initRate;
    init();
}

const init = () => {
    pixelDensity(1);
    img.loadPixels();
    spots = [];
    circles = [];
    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
            var index = x + y * img.width;
            var c = img.pixels[index * 4];
            var b = brightness([c]);
            if (b > 0) {
                spots.push({ x, y });
            }
        }
    }
};

function draw() {
    frameRate(rate);
    background(attribute['theme']);
    stroke(attribute['color']);
    strokeWeight(2);
    noFill();

    let count = 0,
        attempts = 0;
    while (count < total) {
        // let x = random(width / margin, width - width / margin);
        // let y = random(height / margin, height - height / margin);
        let { x, y } = spots[parseInt(random(0, spots.length))];

        let valid = true;
        for (let other of circles) {
            let distance = dist(x, y, other.x, other.y);
            if (other != circle && distance < other.r) {
                valid = false;
                break;
            }
        }
        if (valid) {
            circles.push(new Circle(x, y));
            count++;
        }
        attempts++;
        if (attempts > maxAttempts) {
            noLoop();
            break;
        }
    }

    for (let circle of circles) {
        if (circle.growing) {
            if (circle.edges()) circle.growing = false;
            else {
                for (let other of circles) {
                    let distance = dist(circle.x, circle.y, other.x, other.y);
                    if (other != circle && distance - distanceMargin < circle.r + other.r) {
                        circle.growing = false;
                        break;
                    }
                }
            }
        }
        circle.show();
        circle.grow();
    }
}

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 0;
        this.growing = true;
    }

    show = () => {
        if (this.r) ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
    };
    grow = () => {
        if (this.growing) this.r = this.r + 0.5;
    };
    edges = () =>
        this.x + this.r > width - width / margin ||
        this.x - this.r < width / margin ||
        this.y + this.r > height - height / margin ||
        this.y - this.r < width / margin;
}

function keyPressed(event) {
    const { key } = event;
    if (key == KEY_D) {
        if (rate < maxRate) rate += incRate;
    }
    if (key == KEY_A) {
        if (rate > minRate) rate -= incRate;
    }
    if (keyCode == ENTER) {
        init();
    }
}

function mouseClicked() {
    circles.push(new Circle(mouseX, mouseY));
}
