const nemo = ['nemo'];
// const everyone = ['dory', 'hruce', 'marlin', 'nemo', 'gill', 'bloat', 
// 	'nigel', 'squirt', 'darla', 'hank'];
// if nemo at last worst case scenario
const everyone = ['dory', 'hruce', 'marlin', 'gill', 'bloat', 
	'nigel', 'squirt', 'darla', 'hank', 'nemo'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
	for (let i = 0; i < array.length; i++) {
		console.log('running')
		if (array[i] === 'nemo') {
			console.log('Found NEMO!');
			break; // add break for efficient
		}
	}
}

findNemo(everyone); // O(n)
// this show this 
// running
// running
// running
// running
// Found NEMO!
// running
// running
// running
// running
// running
// running
// not efficient even find then continue loop

// Rule 1: Worst Case
