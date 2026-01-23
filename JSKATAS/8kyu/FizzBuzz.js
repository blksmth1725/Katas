const hundoArr = Array.from(Array(101).keys());

const fizzBuzz = (arr) => {
	return arr.map((num) => {
		if (num === 0) {
			return num;
		} else if (num % 15 === 0) {
			return "FizzBuzz";
		} else if (num % 5 === 0) {
			return "Buzz";
		} else if (num % 3 === 0) {
			return "Fizz";
		} else {
			return num;
		}
	});
};

console.log(fizzBuzz(hundoArr));
