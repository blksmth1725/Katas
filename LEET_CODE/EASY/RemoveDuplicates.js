const sA = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // Output: 5, nums = [0,1,2,3,4,_,_,_,_]

const rmvDups = (nums) => {
  const il = nums.length;
  if (nums.length === 0) return 0;

  let write = 1;

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
};

console.log(rmvDups(sA));
