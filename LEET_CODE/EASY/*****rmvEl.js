const sA = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const sA2 = [3, 2, 2, 3];
const sA3 = [0, 1, 2, 2, 3, 0, 4, 2];
const rmvEl = (nums, val) => {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== val) {
      nums[write] = nums[read];
      write++;
    }
  }

  return write;
};

console.log(rmvEl(sA, 1));
console.log(rmvEl(sA2, 3));
console.log(rmvEl(sA3, 2));
