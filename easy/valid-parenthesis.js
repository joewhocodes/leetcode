/**
 * @param {string} s
 * @return {boolean}
 */

//only {}[] (), never empty 
//return boolean

const isValid = (s) => {
    let arr = [];
    s.split('').map((e) => {
        if ('[({'.includes(e)) {
            arr.push(e);
        } else if (e == '}' && arr[arr.length - 1] == '{') {
            arr.pop();
        } else if (e == ')' && arr[arr.length - 1] == '(') {
            arr.pop();
        } else if (e == ']' && arr[arr.length - 1] == '[') {
            arr.pop();
        } else {
            arr.push(e);
        }
    });
    return arr.length == 0;
};


console.log(isValid(']'))


// .some(e => e !== false);