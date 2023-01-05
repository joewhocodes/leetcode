const fib = n => {
    let arr = [1, 2];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    return !n ? 0 : arr[arr.length-2];
}

// console.log(fib(0))

const fibonacci = n => {
    if (n < 2) {
        return n
    } 
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7))

// console.log(fib(0))

