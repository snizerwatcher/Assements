var _ = require('lodash');

function Q3Main() {
	const inputs = [
		[7, 1, 5, 3, 6, 4],
		[1, 3, 4, 5, 6, 7],
		[7, 6, 4, 3, 1]
	];

	inputs.forEach(inputArray => {
		console.log("Input Array:");
		console.log(inputArray);
		console.log("Output Maximum Profit:");
		console.log(maximum_profit(inputArray));
	});

}

function maximum_profit(input) {
	// Find min value in  array first
	let minValue = _.min(input);
	let minValueIndex = _.findIndex(input, function (v) { return v === minValue; });
	// This could be achive with in one go if we use find min algorithim instead of loadash library
	// on each iteration compare i < i+1 and set the min value its index.

	let newInput = _.takeRight(input, input.length - (minValueIndex + 1));
	// This could be achive with for loop with i= minValue with find max algorithim

	// Find max value in  array in newInput
	let maxValue = _.max(newInput);

	let profit = maxValue - minValue;
	return profit = isNaN(profit) ? 0 : profit;

};

//Entry point
Q3Main();





