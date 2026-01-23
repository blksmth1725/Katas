const hundoArr = Array.from(Array(101).keys());

const LinearSearch = (a, n) => {
	return a.indexOf(n);
};

LinearSearch(hundoArr, 10);

//----------------------------------------------------------------------------------------------------------------------

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start, end) {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);
}

function generateRandomObjects(count) {
	const objects = [];

	for (let i = 0; i < count; i++) {
		const obj = {
			id: getRandomInt(1, 100),
			name: `Person ${i + 1}`,
			age: getRandomInt(18, 65),
			dateOfBirth: getRandomDate(new Date(1950, 0, 1), new Date()),
		};

		objects.push(obj);
	}

	return objects;
}

// Generate an array of 10 random objects
const randomArray = generateRandomObjects(10);
console.log(randomArray);
