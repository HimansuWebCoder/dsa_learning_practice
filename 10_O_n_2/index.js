// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log(array[i], array[j]);
		}
	}
}

logAllPairsOfArray(boxes);

// O(n * n)
// O(n ^ n)

// ES5

function logAllPairsOfBoxes(boxes) {
	boxes.forEach(function(firstBox) {
		boxes.forEach(function(secondBox) {
			console.log(firstBox, secondBox);
		});
	});
}

// O(n2) - Quadratic Time  -- in this n2 is n square of 2 not n2 ok 