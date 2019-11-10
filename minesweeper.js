document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
let board = {
  cells : []
};

function createBoard(rows, cols) {
  for (let row = 0; row < rows; row++) {
    for (col = 0; col < cols; col++) {
      board.cells.push({
        'row': row,
        'col': col,
        'isMine': Math.random() < 0.15,
        'hidden': true
      })
    } 
  }
}

createBoard(6, 6);

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