const isPerfectSqr = (num) => {
  let left = 0;
  let right = num;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqr = mid * mid;

    if (sqr === num) return true;
    if (sqr < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

console.log(isPerfectSqr(16));
console.log(isPerfectSqr(14));
console.log(isPerfectSqr(84));
console.log(isPerfectSqr(81));
console.log(isPerfectSqr(144));
console.log(isPerfectSqr(12));
console.log(isPerfectSqr(13));
