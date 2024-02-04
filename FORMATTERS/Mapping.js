const obj1 = {
	firstName: "Christian",
	lastName: "Sheen",
	DOB: new Date(1990, 6, 5),
	profession: "Software-Engineer",
};

const myArray = ["firstName", "lastName", "DOB", "profession"];

// Function to return a random element from the array
function getRandomElement(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

// Call the function to get a random element from the array
const randomValue = getRandomElement(myArray);

const gimmeValue = (key, obj) => {
	const tempObj = obj;
	value = tempObj[key];

	return value;
};

console.log("Random Value From OBJ =>", gimmeValue(randomValue, obj1));
