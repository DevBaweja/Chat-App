class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 1;
        this.maxSpeed = 2.5;
        this.perception = 50;
    }

    edges = () => {
        if (this.position.x > width) this.position.x = 0;
        else if (this.position.x < 0) this.position.x = width;
        else if (this.position.y > height) this.position.y = 0;
        else if (this.position.y < 0) this.position.y = height;
    };
    update = () => {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    };

    show = () => {
        strokeWeight(8);
        point(this.position.x, this.position.y);
    };

    separation = boids => {
        let total = 0;
        const steering = boids.reduce((steering, other) => {
            const distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && distance <= this.perception) {
                const diff = p5.Vector.sub(this.position, other.position);
                diff.div(distance);
                steering.add(diff);
                total++;
            }
            return steering;
        }, createVector());
        if (total) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    };

    align = boids => {
        let total = 0;
        const steering = boids.reduce((steering, other) => {
            const distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && distance <= this.perception) {
                steering.add(other.velocity);
                total++;
            }
            return steering;
        }, createVector());
        if (total) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    };

    cohesion = boids => {
        let total = 0;
        const steering = boids.reduce((steering, other) => {
            const distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (other != this && distance <= this.perception) {
                steering.add(other.position);
                total++;
            }
            return steering;
        }, createVector());
        if (total) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    };

    flock = boids => {
        const separation = this.separation(boids);
        const alignment = this.align(boids);
        const cohesion = this.cohesion(boids);
        this.acceleration.add(separation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
    };
}
