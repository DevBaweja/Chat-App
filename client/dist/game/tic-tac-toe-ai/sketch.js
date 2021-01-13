let board;
let size;
const playerX = 'X';
const playerY = 'Y';

const initSize = 3;
const incSize = 1;
const minSize = 2;
const maxSize = 3;

let count;
let winnerLine;
let done;
let currentPlayer;
let h, w;
let available;

function setup() {
    createCanvas(500, 500);
    size = initSize;
    init();
}

const init = () => {
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
};

const calculateAvailable = () => {
    // Recalculating available
    available = [];
    for (let x = 0; x < size; x++)
        for (let y = 0; y < size; y++) {
            if (!board[x][y]) available.push({ x, y });
        }
};

const changePlayer = () => {
    switch (currentPlayer) {
        case playerX:
            currentPlayer = playerY;
            break;
        case playerY:
            currentPlayer = playerX;
            break;
    }
};

const equal = (a, b) => a == b && a != '';

const checkWinner = () => {
    let winner;
    winnerLine = [];
    // Horizontal
    for (let i = 0; i < size; i++) {
        let temp = board[i][0];
        winnerLine.push({ i, j: 0 });
        let found = true;
        for (let j = 1; j < size; j++) {
            if (!equal(temp, board[i][j])) {
                found = false;
                break;
            }
            winnerLine.push({ i, j });
        }
        if (found) {
            winner = temp;
            break;
        }
    }
    winnerLine = [];
    // Vertical
    for (let j = 0; j < size; j++) {
        let temp = board[0][j];
        let found = true;
        winnerLine.push({ i: 0, j });
        for (let i = 1; i < size; i++) {
            if (!equal(temp, board[i][j])) {
                found = false;
                break;
            }
            winnerLine.push({ i, j });
        }
        if (found) {
            winner = temp;
            break;
        }
    }

    // Diagonal
    let found, temp;
    found = true;
    temp = board[0][0];
    for (let i = 1; i < size; i++) {
        if (!equal(temp, board[i][i])) {
            found = false;
            break;
        }
    }
    if (found) winner = temp;

    found = true;
    temp = board[size - 1][0];
    for (let i = 1; i < size; i++) {
        if (!equal(temp, board[size - i - 1][i])) {
            found = false;
            break;
        }
    }
    if (found) winner = temp;

    if (!winner && !available.length) return 'Tie';
    else if (winner) return winner;
    else return '';
};
/*
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
*/
function nextTurn() {
    if (available.length != 0) {
        count = 0;
        let bestScore = -Infinity;
        let bestMove;
        for (let { x, y } of available) {
            board[x][y] = playerY;
            calculateAvailable();
            // Let suppose ai choose this x and y
            // Next move will be minimization by human
            let score = minimax(board, false);
            // Reset as if move was not choosen
            board[x][y] = '';
            available.push({ x, y });

            // AI trys to get maximum score
            if (score == max(score, bestScore)) {
                bestScore = score;
                bestMove = { x, y };
            }
        }
        board[bestMove.x][bestMove.y] = playerY;
        // Change player
        changePlayer();
        // Recalculating available
        calculateAvailable();
    }
}

let score = {
    X: -1,
    Y: 1,
    Tie: 0,
};

function minimax(board, isMaximizing) {
    // For Base Case
    let result = checkWinner();
    if (result) {
        count++;
        return score[result];
    }

    if (isMaximizing) {
        // AI Turn
        let bestScore = -Infinity;
        // Checking for each spot
        for (let { x, y } of available) {
            board[x][y] = playerY;
            calculateAvailable();
            let score = minimax(board, false);
            board[x][y] = '';
            available.push({ x, y });
            bestScore = max(score, bestScore);
            // If it goes with this path and other will play optimal even then it wins
            // so no need to check any other path go to this path only
            if (bestScore == 1) break;
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        // Checking for each spot
        for (let { x, y } of available) {
            board[x][y] = playerX;
            calculateAvailable();
            let score = minimax(board, true);
            board[x][y] = '';
            available.push({ x, y });
            bestScore = min(score, bestScore);
            // If it goes with this path and other will play optimal even then it wins
            // so no need to check any other path go to this path only
            if (bestScore == -1) break;
        }
        return bestScore;
    }
}

function mousePressed() {
    if (done) {
        init();
        return;
    }
    switch (currentPlayer) {
        case playerX:
            {
                let x = floor(mouseY / h);
                let y = floor(mouseX / w);

                let index = available.findIndex(spot => spot.x == x && spot.y == y);
                if (index != -1) {
                    board[x][y] = playerX;
                    changePlayer();
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
    let result = checkWinner();
    if (result) done = true;
    switch (result) {
        case 'Tie':
            console.log('Tie');
            break;
        case playerX:
        case playerY: {
            console.log(result);
            // drawWinnerLine();
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

function keyPressed(event) {
    const { key } = event;
    if (key == KEY_S) {
        if (size > minSize) {
            size -= incSize;
            init(size);
        }
    }
    if (key == KEY_W) {
        if (size < maxSize) {
            size += incSize;
            init(size);
        }
    }
    if (keyCode == ENTER) {
        init(size);
    }
}
