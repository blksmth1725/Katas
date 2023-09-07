const arr1 = [1, 0, 0];
const arr2 = [0, 1, 0];
const arr3 = [0, 0, 1];
const arr4 = [1, 1, 1, 2, 1, 1];
const arr5 = [1, 1, 2, 1, 1];
const arr6 = [3, 10, 3, 3, 3];

function findUniq(arr) {
	let unique = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
			unique.push(arr[i]);
		}
	}

	return Number(unique.join(""));
}

console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));
