const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const isValidSudoku = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        board[i][j] = 0;
      } else {
        board[i][j] = Number(board[i][j]);
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    const seen = {};
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === 0) continue;
      if (seen[val]) return false;
      seen[val] = true;
    }
  }

  for (let col = 0; col < 9; col++) {
    const seen = {};
    for (let row = 0; row < 9; row++) {
      const val = board[row][col];
      if (val === 0) continue;
      if (seen[val]) return false;
      seen[val] = true;
    }
  }

  for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      const seen = {};
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const val = board[boxRow + r][boxCol + c];
          if (val === 0) continue;
          if (seen[val]) return false;
          seen[val] = true;
        }
      }
    }
  }

  return true;
};

console.log(isValidSudoku(board));
