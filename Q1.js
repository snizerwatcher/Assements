var _ = require('lodash/Object');

function Q1Main() {
	const inputs = [
		[1, 3, 4, 2, 2],
		[3, 1, 3, 4, 2],
		[1, 1],
		[1, 1, 2],
		[1, 3, 4, 6]
	];

	inputs.forEach(inputArray => {
		console.log("Input Array:");
		console.log(inputArray);
		console.log("Repeated Value:");
		console.log(find_one_repeated_nbr(inputArray));
	});

}

function find_one_repeated_nbr(input) {

	const frequency = {};

	let output = 0;

	input.every(element => {
		if (_.has(frequency, element)) {
			output = element;
			return false;
		}
		else {
			frequency[element] = 0;
		}

		return true;
	});

	return output;

}

//Entry point
Q1Main()