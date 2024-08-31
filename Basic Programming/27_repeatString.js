//* Coding Challenge: Repeat a String
//======================================================
//* Write a function called repeatString that takes two parameters:
// str: A string that needs to be repeated.
//? num: An integer representing the number of times the string should be repeated.
//? The function should repeat the input string str the specified number of times num and return the resulting string.

const repeatString = (str, num) =>{
    // let result = '';
    // for (let i = 0; i < num; i++) {
    //     result += str;
    // }
    // return result;
    
    //=======================================
    return str >0 ? str.repeat(num) : str
}


console. log(repeatString("abc", 0)); // Output: abcabcabcabcabe"
//* Constraints:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The input number num will be a non-negative integer.
//? The output string length should not exceed the length of str multiplied by num.