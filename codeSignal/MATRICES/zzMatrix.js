const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

const zzMatrix = (arr) => {
  if (!matrix || matrix.length === 0) return [];
  const rows = arr.length;
  const cols = arr[0].length;
  let result = [];

  for (let col = cols - 1; col >= 0; col--) {
    const up = (cols - 1 - col) % 2 === 0;

    if (up) {
      for (let row = rows - 1; row >= 0; row--) {
        result.push(arr[row][col]);
      }
    } else {
      for (let row = 0; row < rows; row++) {
        result.push(arr[row][col]);
      }
    }
  }
  return result;
};

console.log(zzMatrix(matrix));
