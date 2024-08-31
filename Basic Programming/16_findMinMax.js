//* Coding Challenge: Find the Minimum Value in an Array
//=============================================================================
// 16: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:

//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.
//=============================================================================================

const findMin = (arr) => {
    if (arr.length === 0) return null;
    let newArr = [...new Set(arr)] // remove duplication values
    // return newArr
    return Math.min(...newArr); // it gives minimum value



}

console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7, 12, -7])); // Output: -7
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)