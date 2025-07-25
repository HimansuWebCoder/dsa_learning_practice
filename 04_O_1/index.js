// function compressFirstBox(boxes) {
// 	console.log(boxes[0]);
// }

// O(1) - Constant Time
// Keep in mind: inputs can be any type of data. Not just arrays

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
	console.log(boxes[0]); // O(1)
	console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes) // O(2)