// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// 2 strings, always strings, length < 50, case sensitive
//return number
// 

const numJewelsInStones = (jewels, stones) => {
    let count = 0;
    stones.split('').map(e => jewels.includes(e) ? count++ : null);
    return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));