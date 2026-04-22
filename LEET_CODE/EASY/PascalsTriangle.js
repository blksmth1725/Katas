const n1 = 5;
const n2 = 10;
const n3 = 3;
const n4 = 2;
const n5 = 8;

const pascalsTriangle = (n) => {
  const triangle = [[1]];

  for (let i = 1; i < n; i++) {
    const prev = triangle[i - 1];
    const row = [1];

    for (let j = 1; j < i; j++) {
      row.push(prev[j - 1] + prev[j]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};

console.log(pascalsTriangle(n1));
console.log(pascalsTriangle(n2));
console.log(pascalsTriangle(n3));
console.log(pascalsTriangle(n4));
console.log(pascalsTriangle(n5));
