const a = 10;
const b = 8 / 3;
const p = 28;

let x = 0.5;
let y = 0.5;
let z = 0.5;
let dt = 0.01;
let v = [];

function setup() {
    createCanvas(640, 360, WEBGL);
    frameRate(100);
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    strokeWeight(2);
    let dx = a * (y - x) * dt;
    let dy = (x * (p - z) - y) * dt;
    let dz = (x * y - b * z) * dt;
    x += dx;
    y += dy;
    z += dz;
    v.push({ x, y, z });
    // 3D Effect
    let camX = map(mouseX, 0, width, -width / 2, width / 2);
    let camY = map(mouseY, 0, height, -height / 2, height / 2);
    camera(camX * 2, camY * 2, height / tan((PI * 30) / 180), 0, 0, 0, 0, 1, 0);

    beginShape();
    scale(5);
    noFill();
    for (let i = 0; i < v.length; i++) {
        vertex(v[i].x, v[i].y, v[i].z);
    }
    endShape();
}
