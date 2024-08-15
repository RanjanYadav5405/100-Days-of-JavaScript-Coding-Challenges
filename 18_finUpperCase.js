//? 17: Write a function to check if a character is uppercase or lowercase.

//* Constraints:


//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.

//I Example usage:
//================================================================================================
function isUpperCase(char) {
    //   if(char.match(/[A-Z]/g)){
    //     return true;
    //   }
    //   return false


    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        return true;
    }
    return false

}


function isLowerCase(character) {
    if (character.match(/[a-z]/g)) {
        return true;
    }
    return false
}

console.log(isUpperCase("S")); // Output: true
console.log(isUpperCase("l")); // Output: false
console.log(isLowerCase("M")); // Output: false
console.log(isLowerCase("b")); // Output: true


//* Notes:

//? Ensure that the function correctly identifies uppercase characters based on
//? Optimize the function to handle edge cases efficiently.