const s1 = "A man, a plan, a canal: Panama";
const s2 = "race a car";
const s3 = " ";

const isVsP = (s) => {
  if (s === " ") return true;
  const sl = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let left = 0;
  let right = sl.length - 1;
  while (left <= right) {
    if (sl[left] !== sl[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

console.log(isVsP(s1)); // true
console.log(isVsP(s2)); // false
console.log(isVsP(s3)); // true
