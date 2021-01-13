const animateType = [
    'bubble-sort',
    'random-sampling',
    'uniform-sampling',
    'circle-packing',
    'k-nearest-neighbors',
    'fractal-tree',
    'mandelbrot-set',
    'julia-set',
    'flocking',
    'maze-generator',
    'fourier-series',
    'fractal-spirograph',
    'lorenz-attractor',
    'reaction-diffusion',
];
const animateHeading = [
    'Bubble Sort',
    'Random Sampling',
    'Uniform Sampling',
    'Circle Packing',
    'K Nearest Neighbors',
    'Fractal Tree',
    'Mandelbrot Set',
    'Julia Set',
    'Flocking',
    'Maze Generator',
    'Fourier Series',
    'Fractal Spirograph',
    'Lorenz Attractor',
    'Reaction Diffusion',
];
const animateQuote = [
    `Sorting out life one load at a time.`,
    `Expose yourself to as much randomness as possible.`,
    `If it requires a uniform, it's a worthless endeavor.`,
    `Life is a circle. The end of one journey is the beginning of the next.`,
    `Good  fences make good neighbors`,
    `It's all about the branches.`,
    `My life is series of accidents. Yet when I look back, I see a pattern.`,
    `I accept chaos, I'm not sure whether it accepts me.`,
    `Eagle don't flock, you have to find them one at a time.`,
    `Life is a maze from which we never escape.`,
    `Fourier is a mathematical poem.`,
    `The spiral is a spiritualized circle.`,
    `It's the butterfly effect.`,
    `Sometimes it's better to react with no reaction.`,
];
const animateContent = [
    `Sorting Algorithms are algorithms that puts elements of a list in a certain order. Classification of sorting algorithm are done by space and time complexity. $ Bubble Sort : It is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements 'bubble' to the top of the list.`,
    `Random Sampling is pretty terrible.$ There is both severe under and over sampling, many samples are densely-packed, even overlapping, leading to large empty areas.$ (Uniform sampling also represents the lower bound of quality for the best-candidate algorithm, as when the number of candidates per sample is set to one.)`,
    `Uniform Sampling is made difficult by competing goals.$ On the one hand, samples should be evenly distributed so there are no gaps. But we must also avoid repeating, regular patterns, which cause aliasing. $ For each new sample, the best-candidate algorithm generates a fixed number of candidates.$ The best candidate is the one that is farthest away from all previous samples. The distance from each candidate to the closest sample is measured, the best candidate becomes the new sample, and the remaining candidates are discarded.`,
    `Circle Packing is the study of the arrangement of circles (of equal or varying sizes) on a given surface such that no overlapping occurs and so that no circle can be enlarged without creating an overlap.$ The associated packing density (n), of an arrangement is the proportion of the surface covered by the circles. Generalisations can be made to higher dimensions – this is called sphere packing, which usually deals only with identical spheres.$
    While the circle has a relatively low maximum packing density of 0.9069 on the Euclidean plane. The worst such shape to pack onto a plane has not been determined, but the smoothed octagon has a packing density of 0.902414, which is the lowest maximum packing density known of any centrally symmetric convex shape.`,
    `K Nearest Neighbors Algorithm (k-NN) is a non-parametric machine learning method. It is used for classification.$ Input consists of the k closest training in feature space. The output depends on whether k-NN is used for classification.$ Output is a class membership. An object is classified by a plurality vote of its neighbors, with the object being assigned to the class most common among its k nearest neighbors.$ If k = 1, then the object is simply assigned to the class of that single nearest neighbor.`,
    `A Fractal is a self-similar subset of Euclidean space whose fractal dimension strictly exceeds its topological dimension. $ Fractals exhibit similar patterns at increasingly small scales called self-similarity, also known as expanding symmetry or unfolding symmetry. $ Fractals appear the same at different levels, as in the Mandelbrot Set. $ If this replication is exactly the same at every scale, as in the Menger Sponge it is called affine self-similar. $ Fractal geometry lies within the mathematical branch of measure theory.`,
    `The Mandelbrot Set is the set of complex numbers c for which the function $ fc(z)=z^2+c does not diverge when iterated from z=0, $ for which the sequence fc(0), fc(fc(0)), ... remains bounded in absolute value. $ Its definition is credited to Adrien Douady who named it in tribute to the mathematician Benoit Mandelbrot, a pioneer of fractal geometry.`,
    `Julia set consists of values such that an arbitrarily small perturbation can cause drastic changes in the sequence of iterated function values. $ The Julia set is now associated with those points z = x + iy on the complex plane for which the series zn+1 = zn2 + c does not tend to infinity. c is a complex constant, one gets a different Julia set for each c. $ Julia was interested in the iterative properties of a more general expression, namely z4 + z3/(z-1) + z2/(z3 + 4 z2 + 5) + c.`,
    `Boids is an artificial life program, developed by Craig Reynolds, which simulates the flocking behaviour of birds. $
    As with most artificial life simulations, Boids is an example of emergent behavior $ i.e. the complexity of Boids arises from the interaction of individual agents (the boids) adhering to a set of simple rules. $ 1. Separation - Steer to avoid crowding of the local flockmates. $ 2. Alignment - Steer towards the average heading of local flockmates. $ 3. Cohesion - Steer to move towards the average position of local flockmates.`,
    `Maze generation implemented using backtracking. This can be described with a recursive routine: $ 1. Given a current cell as a parameter, mark it as visited. $ 2. While the current cell has any unvisited neighbour cells. $ - Choose one of the unvisited neighbors. $ - Remove the wall between the current cell and the chosen cell. $ - Invoke the routine recursively for a chosen cell which is invoked once for any initial cell in the area.`,
    `Fourier series is a periodic function composed of harmonically related sinusoids, combined by a weighted summation. $ With appropriate weights, one cycle of the summation can be made to approximate an arbitrary function in that interval. $ As such, the summation is a synthesis of another function. The discrete-time Fourier transform is an example of Fourier series. The process of deriving the weights that describe a given function is a form of Fourier analysis. $ For functions on unbounded intervals, the analysis and synthesis analogies are Fourier transform and inverse transform.`,
    `Fractal Spirographs (aka Fractal Routlette) are generated by tracking a series (or chain) of circles rotating around each other.`,
    `The Lorenz system is a system of ordinary differential equations. Lorenz attractor is a set of chaotic solutions of the Lorenz system. $ 'Butterfly Effect' stems from the real-world implications of the Lorenz attractor in the absence of perfect knowledge of the initial conditions (even the minuscule disturbance of the air due to a butterfly flapping its wings), $ Our ability to predict its future course will always fail. This underscores that physical systems can be completely deterministic and yet still be inherently unpredictable even in the absence of quantum effects. $ The shape of the Lorenz attractor itself, when plotted graphically, may also be seen to resemble a butterfly.`,
    `A simulation of two virtual chemicals reacting and diffusing. $ Reaction Diffusion systems are mathematical models which correspond to several physical phenomena. $ The most common is the change in space and time of the concentration of one or more chemical substances: $ Local chemical reactions in which the substances are transformed into each other. $ Diffusion which causes the substances to spread out over a surface in space.`,
];
const animateAnchor = [
    'https://en.wikipedia.org/wiki/Bubble_sort',
    'https://bost.ocks.org/mike/algorithms/#sampling',
    'https://bost.ocks.org/mike/algorithms/#sampling',
    'https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm',
    'https://en.wikipedia.org/wiki/Circle_packing',
    'http://benice-equation.blogspot.com/2013/01/binary-fractal-tree.html',
    'http://paulbourke.net/fractals/mandelbrot/',
    'http://paulbourke.net/fractals/juliaset/',
    'https://en.wikipedia.org/wiki/Boids',
    'https://en.wikipedia.org/wiki/Maze_generation_algorithm',
    'https://en.wikipedia.org/wiki/Fourier_series',
    'http://benice-equation.blogspot.com/2012/01/fractal-spirograph.html',
    'https://en.wikipedia.org/wiki/Lorenz_system',
    'http://karlsims.com/rd.html',
];

const animateInstruction = [
    [
        {
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
        },
        { title: 'Press [D] to increase the speed.' },
        { title: 'Press [A] to decrease the speed.' },
        {
            title: 'Press [Enter] to change the flow.',
            description: 'It will make elements to sort in either ascending or descending order.',
        },
        { title: 'Press [W] to increase the number of elements.' },
        { title: 'Press [S] to decrease the number of elements.' },
    ],
    [
        {
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
        },
        { title: 'Press [D] to increase the speed.' },
        { title: 'Press [A] to decrease the speed.' },
        { title: 'Press [Enter] to restart animation.' },
    ],
    [
        {
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
        },
        { title: 'Press [D] to increase the speed.' },
        { title: 'Press [A] to decrease the speed.' },
        {
            title: 'Press [W] to increase the number of candidates.',
            description: 'More candidate points will cause more uniformity among points',
        },
        {
            title: 'Press [S] to decrease the number of candidates.',
            description: 'Less candidate points will cause more randomness among points',
        },
        { title: 'Press [Enter] to restart animation.' },
    ],
    [
        {
            title: '[Click] or [Drag] over animation to add circle.',
            description: `It will add circle at the desired position only if circle doesn't lies inside another circle.`,
        },
        { title: 'Press [R] to apply circle packing randomly.' },
        { title: 'Press [T] to apply circle packing on text.' },
        { title: 'Press [I] to apply circle packing on image.' },
        { title: 'Press [D] to increase the speed.' },
        { title: 'Press [A] to decrease the speed.' },
        { title: 'Press [Enter] to restart animation.' },
    ],
    [
        {
            title: '[Click] over animation to add test data for classification.',
            description: 'It must be done over empty spaces on animation.',
        },
        {
            title: 'Press [Enter] to change data points.',
        },
        {
            title: 'Press [D] to increase the k value.',
            description: 'It will classify with more k closest training data points.',
        },
        {
            title: 'Press [A] to decrease the k value.',
            description: 'It will classify with less k closest training data points.',
        },
        {
            title: 'Press [W] to increase the density of data points.',
        },
        {
            title: 'Press [S] to decrease the density of data points',
        },
    ],
    [
        {
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
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
            title: 'View [Julia Set] to get different chaotic patterns.',
            description:
                'Julia set consists of values such that an arbitrarily small perturbation can cause drastic changes in the sequence of iterated function values.',
        },
        {
            title: 'View [Fatou Set] to get different regular patterns.',
            description:
                'Fatou set of the function consists of values with the property that all nearby values behave similarly under repeated iteration of the function.',
        },
    ],
    [
        {
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
        },
        {
            title: '[Hover] over animation to view different dust.',
            description: 'Get your own view of it.',
        },
        ,
    ],
    [
        {
            title: '[Click] or [Drag] over animation to add boid.',
            description: 'It will add boid at the desired position.',
        },
        { title: 'Press [D] to increase speed.', description: 'It will cause animation to move faster.' },
        { title: 'Press [A] to decrease speed.', description: 'It will cause animation to move slowley.' },
    ],
    [
        {
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
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
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
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
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
        },
        { title: 'Press [Enter] to change pattern.' },
        { title: 'Press [D] to increase speed.' },
        { title: 'Press [A] to decrease speed.' },
        { title: 'Press [W] to increase the number of the circles.' },
        { title: 'Press [S] to decrease the number of the circles.' },
    ],
    [
        {
            title: '[Hover] over animation to get 3D Effect.',
            description: 'Get your own view of it.',
        },
    ],
    [
        {
            title: '[Click] over animation to play/pause.',
            description: 'It will make animation to play or pause. Must be done over the canvas.',
        },
        { title: 'Press [D] to increase speed.' },
        { title: 'Press [A] to decrease speed.' },
    ],
];
export { animateType, animateHeading, animateQuote, animateContent, animateAnchor, animateInstruction };
