const gameType = ['tic-tac-toe', 'tic-tac-toe-ai'];
const gameHeading = ['Tic Tac Toe', 'Tic Tac Toe AI'];
const gameQuote = [
    `Love is game of tic-tac-toe, constantly waiting for next x or o.`,
    `If you're testing my waters. You better know how to swim`,
];
const gameAnchor = ['https://en.wikipedia.org/wiki/Tic-tac-toe', 'https://www.neverstopbuilding.com/blog/minimax'];

const gameInstruction = [
    [
        {
            title: '[How] to play tic tac toe.',
            description:
                'In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row.',
        },
        {
            title: '[Tactics] to master tic tac toe.',
            description: 'Win, Block, Fork, Blocking fork, Center, Opposite corner, Empty corner, Empty side',
        },
        {
            title: 'Press [W] to increase the board size.',
        },
        {
            title: 'Press [S] to decrease the board size.',
        },
        {
            title: 'Press [Enter] to clear the board.',
        },
    ],
    [
        {
            title: '[How] to play tic tac toe.',
            description:
                'In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row.',
        },
        {
            title: '[Technique] used to make AI.',
            description:
                'Minimax Algorithm with alpha beta pruning. Minimax is a decision rule for minimizing the possible loss for a worst case scenario. When dealing with gains, it is referred to as maximin - to maximize the minimum gain. Originally formulated for n-player zero-sum game theory, covering both the cases where players take alternate moves and those where they make simultaneous moves, it has also been extended to more complex games and to general decision-making in the presence of uncertainty.',
        },
        {
            title: 'Press [W] to increase the board size.',
        },
        {
            title: 'Press [S] to decrease the board size.',
        },
        {
            title: 'Press [Enter] to clear the board.',
        },
    ],
];
export { gameType, gameHeading, gameQuote, gameAnchor, gameInstruction };
