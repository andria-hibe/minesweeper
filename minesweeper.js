document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
    row: 0,
    col: 0,
    isMine: true,
    hidden: true,
  }, {
    row: 0,
    col: 1,
    isMine: false,
    hidden: true,
  }, {
    row: 0,
    col: 2,
    isMine: false,
    hidden: true,
  }, {
    row: 1,
    col: 0,
    isMine: false,
    hidden: true,
  }, {
    row: 1,
    col: 1,
    isMine: true,
    hidden: true,
  }, {
    row: 1,
    col: 2,
    isMine: true,
    hidden: true,
  }, {
    row: 2,
    col: 0,
    isMine: false,
    hidden: true,
  }, {
    row: 2,
    col: 1,
    isMine: true,
    hidden: true,
  }, {
    row: 2,
    col: 2,
    isMine: false,
    hidden: true,
  }]
};

function startGame () {
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
}

function checkForWin () {
  if (board.cells.every(cell => cell.isMine && cell.isMarked || !cell.isMine && !cell.hidden)) {
    lib.displayMessage('You win!');
  }
}

function countSurroundingMines (cell) {
  const surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  let countMines = 0;
  for (let i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      countMines++;
    }
  }
  return countMines;
}


