const r1 = "III";
const r2 = "LVIII";
const r3 = "MCMXCIV";

const rti = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]];
    const next = map[s[i + 1]];

    if (next && curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }

  return total;
};

console.log(rti(r1));
console.log(rti(r2));
console.log(rti(r3));
