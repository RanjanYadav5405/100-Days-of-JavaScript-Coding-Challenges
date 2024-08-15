// Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as
//input and return the reversed string.


// Example usage:
//========================================================================================================

const reverseString = (str) =>{
         str = str.split('')
         let rev = '';
         for(let i =str.length-1; i>=0; i--){
            rev += str[i];
         }
         return rev;


}

console. log(reverseString("hello" )); // olleh