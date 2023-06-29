// array of integers, target value. Return index if target is found. If not, return the index where it would be if it were inserted in order.


const searchInsert = (nums, target) => {
	let index = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) return i;
		if (nums[i] < target) index++;
        if (nums[i] > target) return index;
	}
	return index;
};
// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 2
// Output: 1

// Input: [1,3,5,6], 7
// Output: 4