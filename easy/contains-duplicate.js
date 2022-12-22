// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// always array of nums, never empty, no negatives, no special chars
// return boolean


// const containsDuplicate = n => n.some(e => n.indexOf(e) !== n.lastIndexOf(e));

const containsDuplicate = n => {
    const obj = {}
    for (let i = 0; i < n.length; i++) {
        obj[n[i]] = obj[n[i]] + 1 || 1;
        if (obj[n[i]] > 1) return true;
    }
    return false
}

console.log(containsDuplicate([1,2,3,4], false))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2], true))
console.log(containsDuplicate([1,2,3,1], true))