//* Interview Question: Count Occurrences of Character

//! Task:
//? Write a function called countChar that takes two parameters: a string and a characterto count. 
//The function should return the number of times the specified character appears in the string.

// console.log(countChar("MissIssippi", "I")); // Output: 4

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function sho
//accept any character that is part of the ASCII character set and is printable).

//===============================================================================================

const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalCount = word.split("").reduce((accum, curChar) => {
        // console.log(curChar)
        if (char === curChar) {
            accum++;
        }
        return accum;
    }, 0);

    return totalCount;

}

console.log(countChar("MissIssippi", "I"));