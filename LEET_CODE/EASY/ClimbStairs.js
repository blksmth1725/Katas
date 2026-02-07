const csts = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = csts(n - 1) + csts(n - 2);
  return memo[n];
};
