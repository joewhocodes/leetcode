const romanToInt = function (s) {
    const dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    s = s
        .replace('IV', 'IIII')
        .replace('IX', 'VIIII')
        .replace('XL', 'XXXX')
        .replace('XC', 'LXXXX')
        .replace('CD', 'CCCC')
        .replace('CM', 'DCCCC');

    for (let i = 0; i < s.length; i++) {
        result += dict[s[i]];
    }

    return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
