const words1 = ["abcd", "def", "xyz"];
const weights1 = [
  5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7,
  2,
];

const words2 = ["a", "b", "c"];
const weights2 = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const words3 = ["abcd"];
const weights3 = [
  7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4, 4,
  5,
];

// const wwm = (words, weights) => {
//   let res = [];
//   const alpha = "abcdefghijklmnopqrstuvwxyz".split("").reverse();
//   const aM = "abcdefghijklmnopqrstuvwxyz".split("").reduce((acc, val, idx) => {
//     acc[val] = idx - 1 + 1;
//     return acc;
//   }, {});

//   for (let i = 0; i < words.length; i++) {
//     let sa = words[i]
//       .split("")
//       .map((el) => {
//         return weights[aM[el]];
//       })
//       .reduce((acc, val) => {
//         return (acc + val) % 26;
//       }, 0);
//     res.push(sa);
//   }
//   return res
//     .map((el) => {
//       return alpha[el];
//     })
//     .join("");
// };

const wwm = (words, weights) => {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let res = [];

  for (let i = 0; i < words.length; i++) {
    const int = words[i].split("").reduce((acc, val) => {
      acc += weights[alpha.split("").indexOf(val)];
      return acc;
    }, 0);
    res.push(alpha.split("").reverse()[int % 26]);
  }
  return res.join("");
};

console.log(wwm(words1, weights1)); //expect rij
console.log(wwm(words2, weights2)); //expect yyy
console.log(wwm(words3, weights3)); // expect g
