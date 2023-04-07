var twoSum = function(arr, arg) {
    // let obj = {}
    // arr.forEach((e, i) => {
    //     obj[e] = i
    // });
    // for (let i = 0; i < arr.length; i++) {
    //     if (obj[target - target[i]]) {
    //         return arr[obj[target - arr[i]], arr[i]];
    //     }
        
    // }

        var hashTable = {};
        arr.forEach(function (value, index) {
            hashTable[value] = index;
        });

            var hashtable = {};
            arr.forEach(function (x) {
                hashtable[x] = true;
                if (hashtable[arg - x]) console.log([arg - x, x]);
            });
    // return obj
};


console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [1, 2]