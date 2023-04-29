// write function, takes sorted array and target, return index of target, if !num return -1
// 1st arg always array of nums, all nums unique, 2nd arg always valid num
// return num

const search = (arr, targ) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === targ) {
            return mid;
        } else if (arr[mid] < targ) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9),) // 4
console.log(search([-1,0,3,5,9,12], 2)) // -1
