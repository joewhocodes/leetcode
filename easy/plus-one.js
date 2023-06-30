const plusOne = digits => {
	let carry = 1;
	for (let i = digits.length - 1; i >= 0; i--) {
		const sum = digits[i] + carry;
		digits[i] = sum % 10;
		carry = Math.floor(sum / 10);
	}
	if (carry) digits.unshift(carry);
	return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
console.log(plusOne([9]));
