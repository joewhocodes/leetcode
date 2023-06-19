// sequentially add each number in to n, return highest number
// return number

const largestAltitude = arr => {
	let calc = 0;
	let highest = 0;
	arr.forEach(n => {
		calc += n;
		if (calc > highest) {
			highest = calc;
		}
	});
	return highest;
};

console.log(highestAltitude([-5,1,5,0,-7]));
console.log(highestAltitude([-4,-3,-2,-1,4,3,2]));
