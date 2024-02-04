const size1 = "four eleven";
const size2 = "four ft eleven in";
const size3 = "four feet eleven inches";
const size4 = "5 feet 11 inches";
const size5 = "5 feet eleven inches";
const size6 = "five feet 11 inches";
const size7 = "five feet 12 inches";
const size8 = "6 feet twelve inches";
const size9 = "seven feet 6 inches";

const numbersMap = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	twelve: 12,
};

const convertToHeight = (sizeString) => {
	const stringArr = sizeString.split(" ");
	const nums = Object.keys(numbersMap);

	const convertedArr = stringArr
		.map((value) => {
			if (nums.includes(value)) {
				return numbersMap[value];
			} else {
				return parseInt(value, 10) || 0;
			}
		})
		.filter((value) => value !== 0);

	return `This person is  ${convertedArr[0]}'${convertedArr[1]}''`;
};

console.log(convertToHeight(size1));
console.log(convertToHeight(size2));
console.log(convertToHeight(size3));
console.log(convertToHeight(size4));
console.log(convertToHeight(size5));
console.log(convertToHeight(size6));
console.log(convertToHeight(size7));
console.log(convertToHeight(size8));
console.log(convertToHeight(size9));
