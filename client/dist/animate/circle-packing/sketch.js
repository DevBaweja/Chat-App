let circles;
let rate;
let state;
const states = { random: 'random', text: 'text', image: 'image' };
let total;
const margin = 32;
const distanceMargin = 2;
const maxAttempts = 10;
const initRate = 35;
const incRate = 10;
const minRate = 5;
const maxRate = 100;
let text, img;

function preload() {
    text = loadImage('assets/chatfuel.jpg');
    img = loadImage('assets/chatfuel.jpg');
}

function setup() {
    createCanvas(640, 360);
    rate = initRate;
    state = states.text;
    total = 4;
    init();
}

const init = () => {
    // Random
    circles = [];
    // Text
    pixelDensity(1);
    text.loadPixels();

    spots = [];
    for (let x = 0; x < text.width; x++) {
        for (let y = 0; y < text.height; y++) {
            let index = x + y * text.width;
            let c = text.pixels[index * 4];
            let b = brightness([c]);
            if (b > 0) spots.push({ x, y });
        }
    }
    // Image
    img.loadPixels();
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
        let x, y, c;
        switch (state) {
            case states.random:
                {
                    x = random(width / margin, width - width / margin);
                    y = random(height / margin, height - height / margin);
                }
                break;
            case states.text:
                {
                    let spot = spots[parseInt(random(0, spots.length))];
                    x = spot.x;
                    y = spot.y;
                }
                break;
            case states.image:
                {
                    x = random(width / margin, width - width / margin);
                    y = random(height / margin, height - height / margin);
                    let index = parseInt(x) + parseInt(y) * img.width;
                    let r = img.pixels[index + 0];
                    let g = img.pixels[index + 1];
                    let b = img.pixels[index + 2];
                    c = color(r, g, b);
                }
                break;
        }

        let valid = true;
        for (let other of circles) {
            let distance = dist(x, y, other.x, other.y);
            if (other != circle && distance < other.r) {
                valid = false;
                break;
            }
        }
        if (valid) {
            circles.push(new Circle(x, y, c));
            count++;
        }
        attempts++;
        if (attempts > maxAttempts) break;
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
    if (mouseIsPressed) circles.push(new Circle(mouseX, mouseY));
}

class Circle {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.r = 0;
        this.c = c;
        this.growing = true;
    }

    show = () => {
        if (this.c) {
            noStroke();
            fill(this.c);
        }
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
    if (key == KEY_R) {
        state = states.random;
        init();
    }
    if (key == KEY_T) {
        state = states.text;
        init();
    }
    if (key == KEY_I) {
        state = states.image;
        init();
    }
}
