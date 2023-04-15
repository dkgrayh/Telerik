// Prime Triangle
// Description
// We know that you love math, so we have prepared a very interesting task, that involves
// both geometry and prime numbers.

// By a given N number, from which you need to generate a sequence of 1 to N inclusive.
// For every prime number in that sequence, you need to print out all the other
// numbers before it (and the number itself), whether they are prime or not

// Note:
// For the purposes of this task (and against the laws of mathematics), the number 1 is considered as prime.

let input = ['10'];

let print = this.print || console.log;
let gets =
	this.gets ||
	(
		(arr, index) => () =>
			arr[index++]
	)(input, 0);

// Your solution starts here

let n = Number(gets());

let result = [];
for (let k = 1; k <= n; k++) {
	let isPrime = true;

	// check if number is greater than 1
	if (k > 1) {
		// looping through 2 to number-1
		for (let i = 2; i <= k / 2; i++) {
			if (k % i == 0) {
				isPrime = false;
				break;
			}
		}
	}

	if (isPrime) {
		result.push('1');
		print(result.join(''));
	} else {
		result.push('0');
	}
}
