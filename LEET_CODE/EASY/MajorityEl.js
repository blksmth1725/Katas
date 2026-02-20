const nums = [2, 2, 1, 1, 1, 2, 2];

const majorityEl = (nums) => {
  return nums.reduce(
    (acc, val) => {
      acc.counts[val] = (acc.counts[val] || 0) + 1;

      if (acc.counts[val] > acc.maxCount) {
        acc.maxCount = acc.counts[val];
        acc.maxKey = val;
      }
      return acc;
    },
    { counts: {}, maxKey: null, maxCount: 0 }
  ).maxKey;
};

console.log(majorityEl(nums));
