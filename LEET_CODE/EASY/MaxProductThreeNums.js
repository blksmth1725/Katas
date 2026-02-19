const nums1 = [1, 2, 3];
const nums2 = [1, 2, 3, 4];
const nums3 = [-1, -2, -3];
const nums4 = [-1, -2];
const nums5 = [-100, -98, -1, 2, 3, 4];

const maxPrdNums = (nums) => {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const prodLargest3 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const prodTwoSmallestAndLargest = nums[0] * nums[1] * nums[n - 1];
  return Math.max(prodLargest3, prodTwoSmallestAndLargest);
};

console.log(maxPrdNums(nums1)); //expect 6
console.log(maxPrdNums(nums2)); //expect 24
console.log(maxPrdNums(nums3)); //expect -6
console.log(maxPrdNums(nums4)); //expect 2
console.log(maxPrdNums(nums5)); //expect 39200
