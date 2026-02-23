const s1 = "racecar";
const s2 = "myracecariscool";
const s3 = "rotor";
const s4 = "deified";
const s5 = "civic";
const s6 = "level";
const s7 = "noon";
const s8 = "refer";
const s9 = "deed";
const s10 = "tattarrattat";
const s11 = "aabbccdde";
const s12 = "aabbccddej";
const s13 = "abccccdd";
const s14 = "a";
const s15 = "ccc";

const lpal = (s) => {
  const counts = new Map();
  let length = 0;
  let hasOdds = false;
  for (const char of s) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const charVal of counts.values()) {
    length += Math.floor(charVal / 2) * 2;
    if (charVal % 2 === 1) hasOdds = true;
  }

  return hasOdds ? length + 1 : length;
};

console.log(s1, lpal(s1));
console.log(s2, lpal(s2));
console.log(s3, lpal(s3));
console.log(s4, lpal(s4));
console.log(s5, lpal(s5));
console.log(s6, lpal(s6));
console.log(s7, lpal(s7));
console.log(s8, lpal(s8));
console.log(s9, lpal(s9));
console.log(s10, lpal(s10));
console.log(s11, lpal(s11));
console.log(s12, lpal(s12));
console.log(s13, lpal(s13));
console.log(s14, lpal(s14));
console.log(s15, lpal(s15));
