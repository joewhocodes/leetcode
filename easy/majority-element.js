// array of nums, size (n), return the element that appears the most
// majority element appears more than n/2 times.

// always array of nums, majority element always exists, no special chars, always positive,
// return num
// 

var majorityElement = function(n) {
    let obj = {};
    for (let i = 0; i < n.length; i++) {
        obj[n[i]] = obj[n[i]] + 1 || 1;
        if (obj[n[i]] > n.length / 2) {
            return Object.keys(obj).find(key => obj[key] === obj[n[i]]);
        }
    }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([4, 5, 4]));
console.log(majorityElement([2,2,1,1,1,2,2]));