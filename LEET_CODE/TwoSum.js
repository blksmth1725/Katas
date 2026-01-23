const arr = [1,2,3,4,5,6,7,8,9,10]

const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if(map.has(needed)) {
            return [map.get(needed), i];
        }
        map.set(nums[i],i)
    }
    return [];
}

console.log(twoSum(arr, 10));
console.log(twoSum(arr, 19));
console.log(twoSum(arr, 15));
console.log(twoSum(arr, 3));