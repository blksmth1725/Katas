const a1 = [1, 2, 3, 4, 5]; //size1
const a2 = [1, 9, 6, 3, 2]; //size3
const a3 = [8, 5, 3, 2, 6]; //size6
const a4 = []; //size1
const a5 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8,
  9,
]; //size5
const chunk = (a, s) => {
  if (!a.length) return [];
  if (a.length < s) return [[...a]];
  if (s === 1) {
    let nA = [];
    for (let i = 0; i < a.length; i++) {
      nA.push([a[i]]);
    }
    return nA;
  }
  if (s > 1) {
    let nA = [];
    while (a.length > 0) {
      let p = a.splice(0, s);
      nA.push(p);
    }
    return nA;
  }
};

console.log(chunk(a1, 1));
console.log(chunk(a2, 3));
console.log(chunk(a3, 6));
console.log(chunk(a4, 1));
console.log(chunk(a5, 5));
