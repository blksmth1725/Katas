//Write a function that takes an array of numbers (integers for the tests) and a target number.
//It should find two different items in the array that, when added together, give the target value.
//The indices of these items should then be returned in a tuple / list(depending on your language)
//like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid
//(numbers will be an array of length 2 or greater, and all of the items will be numbers;
//target will always be the sum of two different items from that array).
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const array3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const array4 = [15, 26, 37, 48, 59, 60, 71, 82, 93];

const twoSum = (arr, target) => {
	for (i = 0; i < arr.length; i++) {
		for (j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				return [i, j];
			}
		}
	}
};

console.log(twoSum(array1, 13));
console.log(twoSum(array2, 70));
console.log(twoSum(array3, 99));
console.log(twoSum(array4, 175));
