// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// always array of nums, never empty, no negatives, no special chars
// return boolean


const containsDuplicate = n => n.some(e => n.indexOf(e) !== n.lastIndexOf(e));

console.log(containsDuplicate([1,2,3,4], false))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2], true))
console.log(containsDuplicate([1,2,3,1], true))