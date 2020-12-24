const boidSize = 200;
const boids = [];
let rate;
const initRate = 4;
const incRate = 0.5;
const minRate = 1;
const maxRate = 10;

function setup() {
    createCanvas(640, 360);
    rate = initRate;
    clicked = false;
    // Creating Boids
    for (let index = 0; index < boidSize; index++) boids.push(new Boid(width / 2, height / 2));
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    boids.forEach(boid => {
        boid.flock(boids);
        boid.update();
        boid.edges();
        boid.show();
    });
    if (clicked) noLoop();

    if (mouseIsPressed) boids.push(new Boid(mouseX, mouseY));
}

function keyPressed(event) {
    const { key } = event;
    if (key == KEY_D) {
        if (rate < maxRate) rate += incRate;
    }
    if (key == KEY_A) {
        if (rate > minRate) rate -= incRate;
    }
}

class Boid {
    constructor(x, y) {
        this.position = createVector(x, y);
        // let angle = random(TWO_PI);
        // this.velocity = createVector(cos(angle), sin(angle));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(-1, 1));
        this.acceleration = createVector(0, 0);
        this.maxForce = 0.05;
        this.perception = 50;
        this.r = 2;
    }

    edges = () => {
        if (this.position.x > width) this.position.x = 0;
        else if (this.position.x < 0) this.position.x = width;
        else if (this.position.y > height) this.position.y = 0;
        else if (this.position.y < 0) this.position.y = height;
    };
    update = () => {
        this.velocity.add(this.acceleration);
        this.velocity.limit(rate);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    };

    show = () => {
        strokeWeight(1);
        noFill();
        let theta = this.velocity.heading() + radians(90);
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape(TRIANGLES);
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape();
        pop();
    };

    separation = boids => {
        let total = 0;
        const steering = boids.reduce((steering, other) => {
            const distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && distance <= this.perception / 2 && distance > 0) {
                const diff = p5.Vector.sub(this.position, other.position);
                diff.div(distance);
                steering.add(diff);
                total++;
            }
            return steering;
        }, createVector(0, 0));
        if (total) {
            steering.div(total);
            steering.setMag(rate);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    };

    align = boids => {
        let total = 0;
        const steering = boids.reduce((steering, other) => {
            const distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && distance <= this.perception && distance > 0) {
                steering.add(other.velocity);
                total++;
            }
            return steering;
        }, createVector(0, 0));
        if (total) {
            steering.div(total);
            steering.setMag(rate);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    };

    cohesion = boids => {
        let total = 0;
        const steering = boids.reduce((steering, other) => {
            const distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && distance <= this.perception && distance > 0) {
                steering.add(other.position);
                total++;
            }
            return steering;
        }, createVector(0, 0));
        if (total) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(rate);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    };

    flock = boids => {
        let separation = this.separation(boids);
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);

        separation = separation.mult(2);
        alignment = alignment.mult(1);
        cohesion = cohesion.mult(1);

        // Factors
        this.acceleration.add(separation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
    };
}
