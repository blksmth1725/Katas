const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
const prices3 = [9, 8, 7, 1, 5, 3, 6, 4, 10, 12, 2];
const prices4 = [9, 8, 7, 5, 3, 6, 4, 10, 12, 2];

const bsStocks = (prices) => {
  let minSoFar = Infinity;
  let bestProfit = 0;

  for (const p of prices) {
    minSoFar = Math.min(minSoFar, p);
    bestProfit = Math.max(bestProfit, p - minSoFar);
  }

  return bestProfit;
};

console.log(bsStocks(prices1));
// console.log(bsStocks(prices2));
// console.log(bsStocks(prices3));
// console.log(bsStocks(prices4));
