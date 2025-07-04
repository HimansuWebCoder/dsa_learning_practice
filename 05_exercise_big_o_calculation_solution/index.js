function funChallenge(input) {
	let a = 10; // n(1)
	a = 50 + 3; // n(1)

	for (let i = 0; i < input.length; i++) { // O(n) or O(input) or O(x)
		anotherFunction(); // O(n)
		let stranger = true; // O(n)
		a++; // O(n)
	}
	return a; // O(1)
}

// 3 + n + n + n + n
// 3 + 4n
// BIG O(3 + 4n)
// BIg O(n)

// You won't need to calculate Big O step by step like here. Soon you will see an easier way to do this that is more practical.

