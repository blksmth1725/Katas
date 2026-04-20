height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const maxArea = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;

  while (left < right) {
    const width = right - left;
    const water = width * Math.min(height[left], height[right]);
    max = Math.max(max, water);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

console.log(maxArea(height));
