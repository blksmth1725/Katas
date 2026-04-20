function findPositions(board) {
  let positions = [];

  let rows = board.length;
  let cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "E") {
        if (
          (i > 0 && board[i - 1][j] === "E") ||
          (i < rows - 1 && board[i + 1][j] === "E") ||
          (j > 0 && board[i][j - 1] === "E") ||
          (j < cols - 1 && board[i][j + 1] === "E")
        ) {
          positions.push([i, j]);
        }
      }
    }
  }
  return positions;
}

let board = [
  ["P", "E", "E", "P"],
  ["E", "P", "E", "P"],
  ["P", "E", "P", "P"],
  ["P", "E", "P", "E"],
];

let positions = findPositions(board);

for (let i = 0; i < positions.length; i++) {
  console.log(`(${positions[i][0]}, ${positions[i][1]})`);
}

positions();
