//Rule 4: Drop Non Dominants

function printAllNumbersThenAllPairsSums(numbers) {

	console.log('these are the numbers:');
	numbers.forEach(function(number) {
		console.log(number);
	});

	console.log('and these are their sums:');
	numbers.forEach(function(firstNumber) {
		numbers.forEach(function(secondNumber) {
			console.log(firstNumber + secondNumber);
		});
	});
}

printAllNumbersThenAllPairsSums([1,2,3,4,5])
// O(n + n^2)
// O(n^2)
500
// O(x^2+3x+100+x/2)
// O(x^2)
// O(x^3)