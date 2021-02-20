// Constants
const end = 9;
const BOARDCOL = {
    '0': '',
    '1': 'X',
    '-1': 'O'
}

const turnName = {
    '1': 'X',
    '-1': 'O',
}

const whenClick = (evt) => {
    let idx = parseInt(evt.target.id);
    if (board[idx] === 0 && winner === 0) {
        board[idx] = turn;
        turn *= -1;
        moves++;
        getWinner();
        render();
    } else if (winner === 1 || winner === -1) {
        msg.innerHTML = 'Hit reset to start a new game!';
        return;
    }
}

// State
let board, turn, winner, moves;
let msg = document.getElementById('msg');
document.querySelector('body').addEventListener('click', whenClick);


// Functions
const render = () => {
    board.forEach((sqr, index) => {
        let squares = document.getElementById(index);
        squares.innerHTML = BOARDCOL[sqr]
        msg.innerHTML = `Player - ${turnName[turn]}`
    })
    if (winner === 1) {
        msg.innerHTML = `Player X has won!`;
    } else if (winner == -1) {
        msg.innerHTML = `Player O has won!`;
    } else if (moves === 9) {
        msg.innerHTML = 'Game over.. no winner!';
    }
}

function getWinner () {
    if (board[0] === 1 && board[1] === 1 && board[2] === 1) winner = 1;
    if (board[0] === -1 && board[1] === -1 && board[2] === -1) winner = -1;
    if (board[3] === 1 && board[4] === 1 && board[5] === 1) winner = 1;
    if (board[3] === -1 && board[4] === -1 && board[5] === -1) winner = -1;
    if (board[6] === 1 && board[7] === 1 && board[8] === 1) winner = 1;
    if (board[6] === -1 && board[7] === -1 && board[8] === -1) winner = -1;
    if (board[0] === 1 && board[3] === 1 && board[6] === 1) winner = 1;
    if (board[0] === -1 && board[3] === -1 && board[6] === -1) winner = -1;
    if (board[1] === 1 && board[4] === 1 && board[7] === 1) winner = 1;
    if (board[1] === -1 && board[4] === -1 && board[7] === -1) winner = -1;
    if (board[2] === 1 && board[5] === 1 && board[8] === 1) winner = 1;
    if (board[2] === -1 && board[5] === -1 && board[8] === -1) winner = -1;
    if (board[0] === 1 && board[4] === 1 && board[8] === 1) winner = 1;
    if (board[0] === -1 && board[4] === -1 && board[8] === -1) winner = -1;
    if (board[2] === 1 && board[4] === 1 && board[6] === 1) winner = 1;
    if (board[2] === -1 && board[4] === -1 && board[6] === -1) winner = -1;
}

const init = () => {
    msg.innerHTML = ''
    turn = 1
    board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]
    winner = 0
    moves = 0
    render()
}

init()