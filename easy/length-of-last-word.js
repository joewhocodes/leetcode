const lengthOfLastWord = s => {
    const word = s.trim().split(' ');
    return word[word.length-1].length;
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))