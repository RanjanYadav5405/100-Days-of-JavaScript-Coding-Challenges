// 14: Write a function called isPowerOfTwo that takes an integer num as
// input and returns true if num is a power of two, and false otherwise.

// Example usage:

// console. log(isPower0fTwo (8)); // Output: true
// console. log(isPower0fTwo(7)); // Output: false
// Notes:
// The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of
// The function should return true if the given number is a po false otherwise.
// we can solve it using bitwise operator too but its your chance to di it
//==================================================================================================

// Simple Way

// const isPower0fTwo = (n) =>{

//     if(n <= 0) {
//         return false;
//     };

//     for(let i =1; i<n; i++){
//         if(2**i === n){
//             return true;
//         }
//     }
//     return false;
// }

//==============================================================================================
// Using Bitwise Operator
const isPower0fTwo = (n) => {
          return n>0 && (n & (n-1)) ==0
}



console. log(isPower0fTwo (8)); // Output: true
console. log(isPower0fTwo(7)); // Output: false