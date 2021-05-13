function sumTriangularNumbers(n) {
  let dot = 0;
  for (let i = 0, j = 1; i <= n; i++, j += 1) {
    dot += j;
  }
  return dot;
}

console.log(sumTriangularNumbers(6));
