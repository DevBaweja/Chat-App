let board;
const playerX = 'X';
const playerY = 'Y';
const size = 3;
let done;
let currentPlayer;
let h, w;
let available;

function setup() {
    createCanvas(500, 500);
    done = false;
    board = [];
    for (let x = 0; x < size; x++) {
        board[x] = [];
        for (let y = 0; y < size; y++) {
            board[x][y] = '';
        }
    }
    currentPlayer = playerX;
    calculateAvailable();
}

const calculateAvailable = () => {
    // Recalculating available
    available = [];
    for (var x = 0; x < size; x++)
        for (var y = 0; y < size; y++) {
            if (!board[x][y]) available.push({ x, y });
        }
};

const changePlayer = () => (currentPlayer = currentPlayer == playerX ? playerY : playerX);

const equal = (a, b, c) => a == b && b == c && c == a && a != '';

const checkWinner = () => {
    let winner;
    // Horizontal
    for (var i = 0; i < size; i++) {
        if (equal(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }
    // Vertical
    for (var j = 0; j < size; j++) {
        if (equal(board[0][j], board[1][j], board[2][j])) {
            winner = board[0][j];
        }
    }

    // Diagonal
    if (equal(board[0][0], board[1][1], board[2][2])) {
        winner = board[1][1];
    }
    if (equal(board[2][0], board[1][1], board[0][2])) {
        winner = board[1][1];
    }
    // No winner and no space available
    if (!winner && !available.length) return 'Tie';
    if (winner) return winner;
};

const nextTurn = () => {
    // If available space then choose randomly and place it
    if (available.length != 0) {
        let spot = random(available);
        let { x, y } = spot;

        board[x][y] = playerY;
        // Change player
        changePlayer();
        // Recalculating available
        calculateAvailable();
    }
};
function mousePressed() {
    if (done) return;
    switch (currentPlayer) {
        case playerX:
            {
                let x = floor(mouseY / h);
                let y = floor(mouseX / w);

                let index = available.findIndex(spot => spot.x == x && spot.y == y);
                if (index != -1) {
                    board[x][y] = playerX;
                    currentPlayer = playerY;
                    available.splice(index, 1);
                }
            }
            break;
        case playerY:
            {
                nextTurn();
            }
            break;
    }

    // Check winner
    var result = checkWinner();
    if (result) done = true;
    switch (result) {
        case 'Tie':
            console.log('Tie');
            break;
        case playerX:
            console.log('X');
            break;
        case playerY:
            console.log('Y');
            break;
        default: {
        }
    }
}

function draw() {
    background(attribute['theme']);
    stroke(attribute['color']);
    strokeWeight(4);
    noFill();
    h = height / size;
    w = width / size;

    // Grid
    for (let i = 1; i < size; i++) line(0, h * i, width, h * i);
    for (let i = 1; i < size; i++) line(w * i, 0, w * i, height);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let x = h * i + h / 2;
            let y = w * j + w / 2;
            switch (board[j][i]) {
                case playerX:
                    {
                        let xr = h / 4;
                        let yr = w / 4;
                        line(x - xr, y - yr, x + xr, y + yr);
                        line(x + xr, y - yr, x - xr, y + yr);
                    }
                    break;
                case playerY:
                    {
                        ellipse(x, y, h / 2, w / 2);
                    }
                    break;
            }
        }
    }
}
