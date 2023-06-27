// 2 args, return the index of first occurance of 2nd arg in first arg
// 2 args, both strings, never empty, always strings
// return number

const strStr = (h, n) => h.indexOf(n);

console.log(strStr('sadbutsad', 'sad', 0))
console.log(strStr('leetcode', 'leeto', -1))
console.log(strStr('hey'))