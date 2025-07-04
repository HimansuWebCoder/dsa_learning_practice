function compressBoxesTwice(boxes, boxes2) {
	boxes.forEach(function(boxes) {
		console.log(boxes);
	});

	boxes2.forEach(function(boxes) {
		console.log(boxes);
	});
}

// O(a + b) 
// O(a*b)
// or like this
// o(boxes1 + boxes2)
// different inputs there so no O(2n)

//Rule 3: Different terms for inputs