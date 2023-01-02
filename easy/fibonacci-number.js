const fib = n => {
    let arr = [1, 2];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    return !n ? 0 : arr[arr.length-2];
}

console.log(fib(0))