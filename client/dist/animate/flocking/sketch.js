const imports = ['boid'];
imports.forEach(item => {
    const script = document.createElement('script');
    script.src = `${attribute['animate']}/${item}.js`;
    document.head.append(script);
});

const flockSize = 100;
const flock = [];

function setup() {
    createCanvas(640, 360);

    // Creating Boids
    for (let index = 0; index < flockSize; index++) flock.push(new Boid());
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    flock.forEach(boid => {
        boid.edges();
        boid.flock(flock);
        boid.show();
        boid.update();
    });
}
