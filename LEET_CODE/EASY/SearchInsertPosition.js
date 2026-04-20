const nums1 = [1, 3, 5, 6];
const nums2 = [1001];
const targ1 = 5;
const targ2 = 7;
const targ3 = 2;
const targ4 = 4;
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert(nums1, targ1));
console.log(searchInsert(nums1, targ2));
console.log(searchInsert(nums1, targ3));
console.log(searchInsert(nums1, targ4));
console.log(searchInsert(nums2, targ1));
