const isPalindrome = x => {
    const splitNum = x.toString().split('');
    return splitNum.join() == splitNum.reverse().join();
};

console.log(isPalindrome(121))