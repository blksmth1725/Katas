const nthPrime = (n) => {
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  let candidate = 1;

  while (count < n) {
    candidate++;
    if (isPrime(candidate)) count++;
  }
  return candidate;
};
