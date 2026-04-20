function countSubmatricesWithE(board) {
  // TODO: Initialize a count variable to keep track of 3x3 submatrices with 'E's in all four corners
  let count = 0;
  for (let row = 0; row < board.length - 2; row++) {
    for (let col = 0; col < board[0].length - 2; col++) {
      const topLeft = board[row][col];
      const topRight = board[row][col + 2];
      const bottomLeft = board[row + 2][col];
      const bottomRight = board[row + 2][col + 2];

      if (
        topLeft === "E" &&
        topRight === "E" &&
        bottomLeft === "E" &&
        bottomRight === "E"
      ) {
        count++;
      }
    }
  }
  return count;

  // TODO: Use a nested loop to go through each element that can be the top-left corner of a 3x3 submatrix

  // TODO: Check if the current 3x3 submatrix has 'E's in all four corners
  // If it does, increment the count

  // TODO: Return the count of submatrices with 'E's in all four corners
}

let board = [
  ["E", "P", "E", "P"],
  ["P", "E", "P", "E"],
  ["E", "P", "E", "P"],
  ["P", "E", "P", "E"],
];

console.log(countSubmatricesWithE(board));
