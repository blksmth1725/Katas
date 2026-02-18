const nums = [5, 4, 3];

const domIdx = (a) => {
  const n = nums.length;
  if (n <= 1) return 0;
  let suffixSum = nums[n - 1];
  let count = 0;

  for (let i = n - 2; i >= 0; i--) {
    const rightCount = n - i - 1;
    const rightAvg = suffixSum / rightCount;

    if (nums[i] > rightAvg) count++;

    suffixSum += nums[i];
  }
  return count;
};

console.log(domIdx(nums));
