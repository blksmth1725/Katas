const s1 = "babad";
const s2 = "cbbd";
const s3 = "a";
const s4 = "ac";

const s5 = "racecar";
const s6 = "myracecariscool";
const s7 = "rotor";
const s8 = "deified";
const s9 = "civic";
const s10 = "level";
const s11 = "noon";
const s12 = "refer";
const s13 = "deed";
const s14 = "tattarrattat";

const lpss = (s) => {
  if (!s) return "";

  let bestL = 0;
  let bestR = 0;

  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return [l + 1, r - 1];
  };

  for (let i = 0; i < s.length; i++) {
    let [l1, r1] = expand(i, i);
    if (r1 - l1 > bestR - bestL) {
      bestL = l1;
      bestR = r1;
    }

    let [l2, r2] = expand(i, i + 1);
    if (r2 - l2 > bestR - bestL) {
      bestL = l2;
      bestR = r2;
    }
  }

  return s.slice(bestL, bestR + 1);
};

console.log(lpss(s1));
console.log(lpss(s2));
console.log(lpss(s3));
console.log(lpss(s4));
console.log(lpss(s5));
console.log(lpss(s6));
console.log(lpss(s7));
console.log(lpss(s8));
console.log(lpss(s9));
console.log(lpss(s10));
console.log(lpss(s11));
console.log(lpss(s12));
console.log(lpss("ccc"));
