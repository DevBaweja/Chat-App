let board;
const playerX = 'X';
const playerY = 'Y';
const size = 3;
let done;
let currentPlayer;
let h, w;

function setup() {
    createCanvas(500, 500);
    board = Array(size)
        .fill()
        .map(() => Array(size).fill(''));

    currentPlayer = playerX;
    done = false;
}

function mousePressed() {
    if (!done) {
        if (currentPlayer == playerX) {
            var i = floor(mouseX / h);
            var j = floor(mouseY / w);
            console.log({ i, j });

            var isAvailable = false;
            for (var x = 0; x < available.length; x++) {
                var findA = available[x];
                if (findA[0] == i && findA[1] == j) isAvailable = true;
            }
            // Using find,indexOf,includes functions of js
            if (isAvailable) {
                board[i][j] = player[currentPlayer];
                // Change player
                changePlayer();
                // Recalculating available
                calculateAvailable();
            }
        } else nextTurn();
        //  whoIsWinner = whoIsWinner ? false : true;

        // Check winner
        var result = checkWinner();
        if (result != null) {
            //createP(result).style('color','#000').style('font-size','32pt');
            switch (player.indexOf(result)) {
                case 0:
                    win++;
                    break;
                case 1:
                    lose++;
                    break;
                case -1:
                    tie++;
                    break;
            }
            console.log(win, tie, lose);
            console.log(result);
            // To stop mousePressed in this 5 sec interval
            done = true;
            // Winner Line
            //drawWinnerLine();
            setTimeout(setup, 5000);
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
