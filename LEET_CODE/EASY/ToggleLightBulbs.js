const bulbs1 = [10, 30, 20, 10];
const bulbs2 = [10, 30, 20, 10, 30, 40, 30, 40, 50, 50, 50, 10];
const bulbs3 = [10, 20, 30, 40, 50, 40, 40, 30, 10];

const toggleLightBulbs = (bulbs) => {
  if (bulbs.length === 0) return [];
  let res = [];
  const nObj = bulbs.reduce((acc, val) => {
    acc[val] = (acc[val] ?? 0) + 1;
    return acc;
  }, {});
  for (const [k, v] of Object.entries(nObj)) {
    if (v === 1) {
      res.push(Number(k));
    } else if (v % 2 !== 0) {
      res.push(Number(k));
    }
  }
  return res;
};

console.log(toggleLightBulbs(bulbs1));
console.log(toggleLightBulbs(bulbs2));
console.log(toggleLightBulbs(bulbs3));
