//Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
let scores1 = [49, 3, 5, 300, 7];
let scores2 = [90, 98, 89, 100, 100, 86, 94];

function average(scores) {
  let total = scores.reduce((a, b) => a + b, 0) / scores.length;
  return Math.ceil(total) - total > 0.5 ? Math.floor(total) : Math.ceil(total);
}

console.log(average(scores1));
console.log(average(scores2));
