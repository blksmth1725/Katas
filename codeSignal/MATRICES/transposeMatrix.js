const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

const transposeMatrix = (arr) => {
  const rows = arr.length;
  const cols = rows > 0 ? arr[0].length : 0;
  let result = [];

  for (let i = 0; i < cols; i++) {
    result[i] = [];
    for (let j = 0; j < rows; j++) {
      result[i][j] = arr[j][i];
    }
  }
  return result;
};
console.log(transposeMatrix(matrix));
