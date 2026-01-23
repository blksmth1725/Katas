const binArr = [
	10011100,
	11000100,
	"00111001",
	"101",
	"11011",
	1100,
	101010,
	"111111",
	1010001,
	1100011,
	"10010000",
	11001000,
];

const binaryConverter = (binNum) => {
	if (typeof binNum === "number") {
		binNum = String(binNum);
	}
	let tempBinNum = binNum.split("").reverse();
	const indexToPow = {
		0: 2 ** 0,
		1: 2 ** 1,
		2: 2 ** 2,
		3: 2 ** 3,
		4: 2 ** 4,
		5: 2 ** 5,
		6: 2 ** 6,
		7: 2 ** 7,
	};

	const decimalArray = tempBinNum
		.map((el, idx) => {
			const decimalValue = el * indexToPow[idx];
			return decimalValue;
		})
		.reduce((acc, val) => acc + val, 0);

	return decimalArray;
};

for (let i = 0; i < binArr.length; i++) {
	console.log("conversion =>", binaryConverter(binArr[i]));
}
