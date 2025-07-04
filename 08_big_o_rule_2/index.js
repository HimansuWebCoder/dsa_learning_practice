function printFirstItemThenFirstHalfThenSayHi100Times(items) {
	console.log(items[0]);

	var middleIndex = Math.floor(items.length / 2);
	var index = 0;

	while (index < middleIndex) {
		console.log(items[index]);
		index++; // because index will increase by / every loop until index is 5
	}

	for (var i = 0; i < 100; i++) {
		console.log('hi');
	}
}

// We are ignoring variable assignments and small calculations for this example
// O(1 + n/2 + 100)
// O(n/2 + 101)
// O(n/2 + 1) // 101 turns into 1
// O(n + 1)
// O(n)

// O(a + 50) or O(a + 500000) // it always turns O(a)


function compressBoxesTwice(boxes) {
	boxes.forEach(function(boxes) {
		console.log(boxes);
	});

	boxes.forEach(function(boxes) {
		console.log(boxes);
	});
}

// O(2n)
// Drop the constants
// then O(n)

//Rule 2: Remove Constants