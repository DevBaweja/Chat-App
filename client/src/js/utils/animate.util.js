const animateType = [
    'fractal-tree',
    'mandelbrot-set',
    'julia-set',
    'flocking',
    'maze-generator',
    'fourier-series',
    'fractal-spirograph',
    'xyz',
];
const animateHeading = [
    'Fractal Tree',
    'Mandelbrot Set',
    'Julia Set',
    'Flocking',
    'Maze Generator',
    'Fourier Series',
    'Fractal Spirograph',
    'xyz',
];
const animateQuote = [
    `It's all about the branches.`,
    `My life is series of accidents. Yet when I look back, I see a pattern.`,
    `I accept chaos, I'm not sure whether it accepts me.`,
    `Eagle don't flock, you have to find them one at a time.`,
    `Life is a maze from which we never escape.`,
    `Fourier is a mathematical poem`,
    ``,
    ``,
];
const animateContent = [
    `A Fractal is a self-similar subset of Euclidean space whose fractal dimension strictly exceeds its topological dimension. $ Fractals exhibit similar patterns at increasingly small scales called self-similarity, also known as expanding symmetry or unfolding symmetry. $ Fractals appear the same at different levels, as in the Mandelbrot Set. $ If this replication is exactly the same at every scale, as in the Menger Sponge it is called affine self-similar. $ Fractal geometry lies within the mathematical branch of measure theory.`,
    `The Mandelbrot Set is the set of complex numbers c for which the function $ fc(z)=z^2+c does not diverge when iterated from z=0, $ for which the sequence fc(0), fc(fc(0)), ... remains bounded in absolute value. $ Its definition is credited to Adrien Douady who named it in tribute to the mathematician Benoit Mandelbrot, a pioneer of fractal geometry.`,
    `The Julia set and The Fatou set are two complementary sets, Julia-"laces" Fatou-"dusts", defined from a function. $ The Fatou set of the function consists of values with the property that all nearby values behave similarly under repeated iteration of the function. $ The Julia set consists of values such that an arbitrarily small perturbation can cause drastic changes in the sequence of iterated function values. $ Thus the behavior of the function on the Fatou set is "regular", while on the Julia set its behavior is "chaotic".`,
    `Boids is an artificial life program, developed by Craig Reynolds, which simulates the flocking behaviour of birds. $
    As with most artificial life simulations, Boids is an example of emergent behavior $ i.e. the complexity of Boids arises from the interaction of individual agents (the boids) adhering to a set of simple rules. $ 1. Separation - Steer to avoid crowding of the local flockmates. $ 2. Alignment - Steer towards the average heading of local flockmates. $ 3. Cohesion - Steer to move towards the average position of local flockmates.`,
    `Maze generation implemented using backtracking. This can be described with a recursive routine: $ 1. Given a current cell as a parameter, mark it as visited. $ 2. While the current cell has any unvisited neighbour cells. $ - Choose one of the unvisited neighbours. $ - Remove the wall between the current cell and the chosen cell. $ - Invoke the routine recursively for a chosen cell which is invoked once for any initial cell in the area.`,
    `Fourier series is a periodic function composed of harmonically related sinusoids, combined by a weighted summation. $ With appropriate weights, one cycle of the summation can be made to approximate an arbitrary function in that interval. $ As such, the summation is a synthesis of another function. The discrete-time Fourier transform is an example of Fourier series. The process of deriving the weights that describe a given function is a form of Fourier analysis. $ For functions on unbounded intervals, the analysis and synthesis analogies are Fourier transform and inverse transform.`,
    ``,
    ``,
];
const animateAnchor = [
    'http://benice-equation.blogspot.com/2013/01/binary-fractal-tree.html',
    'http://paulbourke.net/fractals/mandelbrot/',
    'http://paulbourke.net/fractals/juliaset/',
    'https://en.wikipedia.org/wiki/Boids',
    'https://en.wikipedia.org/wiki/Maze_generation_algorithm',
    'https://en.wikipedia.org/wiki/Fourier_series',
    'http://benice-equation.blogspot.com/2012/01/fractal-spirograph.html',
    '',
];

const animateInstruction = [
    [
        {
            title: 'Click to play/pause.',
            description: 'It will make animation to play or stop. Must be done over the canvas.',
        },
        {
            title: 'Press [Enter] to reverse the direction.',
        },
        {
            title: 'Press [D] to increase the speed of growing.',
            description: 'It will cause animation to move faster.',
        },
        {
            title: 'Press [A] to decrease the speed of growing.',
            description: 'It will cause animation to move slowley.',
        },
    ],
    [
        {
            title: 'Click to play/stop.',
            description: 'It will make animation to play or stop. Must be done over the canvas.',
        },
        { title: 'Press [W] to increase speed.', description: 'It will cause animation to move faster.' },
        { title: 'Press [S] to decrease speed.', description: 'It will cause animation to move slowley.' },
        { title: 'Press [D] to increase rate.', description: 'It will increase frequency of wave.' },
        { title: 'Press [A] to decrease rate.', description: 'It will decrease frequency of wave.' },
    ],
    [
        {
            title: 'Click to play/stop.',
            description: 'It will make animation to play or stop. Must be done over the canvas.',
        },
        { title: 'Press [W] to increase speed.', description: 'It will cause animation to move faster.' },
        { title: 'Press [S] to decrease speed.', description: 'It will cause animation to move slowley.' },
        { title: 'Press [D] to increase rate.', description: 'It will increase frequency of wave.' },
        { title: 'Press [A] to decrease rate.', description: 'It will decrease frequency of wave.' },
    ],
    [
        {
            title: 'Click to play/stop.',
            description: 'It will make animation to play or stop. Must be done over the canvas.',
        },
        { title: 'Press [W] to increase speed.', description: 'It will cause animation to move faster.' },
        { title: 'Press [S] to decrease speed.', description: 'It will cause animation to move slowley.' },
        { title: 'Press [D] to increase rate.', description: 'It will increase frequency of wave.' },
        { title: 'Press [A] to decrease rate.', description: 'It will decrease frequency of wave.' },
    ],
    [
        {
            title: 'Click to play/stop.',
            description: 'It will make animation to play or stop. Must be done over the canvas.',
        },
        {
            title: 'Press [D] to increase the speed of the head.',
            description: 'It will cause head to traverse faster to create maze.',
        },
        {
            title: 'Press [A] to decrease the speed of the head.',
            description: 'It will cause head to traverse slower to create maze.',
        },
        { title: 'Press [W] to increase the size of maze.' },
        { title: 'Press [S] to decrease the size of maze.' },
    ],

    [
        {
            title: 'Click to play/stop.',
            description: 'It will make animation to play or stop. Must be done over the canvas.',
        },
        {
            title: 'Press [D] to increase the rpm of the circles.',
            description: 'It will form wave with higher frequency.',
        },
        {
            title: 'Press [A] to decrease the rpm of the circles.',
            description: 'It will form wave with lower frequency.',
        },
        {
            title: 'Press [W] to increase the number of the circles.',
            description: 'It will cause wave to converge toward sqaure wave.',
        },
        {
            title: 'Press [S] to decrease the number of the circles.',
            description: 'It will cause wave to diverge from sqaure wave.',
        },
    ],
    [
        {
            title: 'Click to play/stop.',
            description: 'It will make animation to play or stop. Must be done over the canvas.',
        },
        { title: 'Press [W] to increase speed.', description: 'It will cause animation to move faster.' },
        { title: 'Press [S] to decrease speed.', description: 'It will cause animation to move slowley.' },
        { title: 'Press [D] to increase rate.', description: 'It will increase frequency of wave.' },
        { title: 'Press [A] to decrease rate.', description: 'It will decrease frequency of wave.' },
    ],
];
export { animateType, animateHeading, animateQuote, animateContent, animateAnchor, animateInstruction };
