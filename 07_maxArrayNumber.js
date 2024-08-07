// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
// Example usage:


const findMax= (arr)=>{
    // console.log(...arr)
    return Math.max(...arr)
}


console. log(findMax([1, 5, 3, 9, 2])); // Output: 9
console. log(findMax([-10, -5, -3, -9, -21])); // Output: -3
console. log(findMax( [5])); // Output: 5