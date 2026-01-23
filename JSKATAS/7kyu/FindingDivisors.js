function getDivisorsCnt(n) {
  let div = 0;
  for (let i = 1; i <= n; i++) if (n % i === 0) div++;
  return div;
}

console.log(getDivisorsCnt(60));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(100));
console.log(getDivisorsCnt(900));
console.log(getDivisorsCnt(1200));
console.log(getDivisorsCnt(90000));
