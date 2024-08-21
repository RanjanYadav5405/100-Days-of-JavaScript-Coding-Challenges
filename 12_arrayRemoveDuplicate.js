// 12: Write a function that takes an array of integers as input and removesany duplicate elements, returning a new array with only the unique
// elements.

// The new Set() method in JavaScript creates a new Set object is a collection of unique values. It can store any type of vali
//primitive values or object references.

// Example usage:

const removeDuplicates =(arr) =>{
    let a = [...new Set(arr)]
    return a
}


console. log (removeDuplicates ( [1, 2, 3, 2, 1, 41])); // Output: [1, 2, 3, 4]
console. log(removeDuplicates( [5, 6, 7, 7, 8, 8, 91])); // Output: [5, 6, 7, 8,9]
console. log (removeDuplicates([1, 2, 3, 4])); // Output: [1, 2, 3,41]
console. log (removeDuplicates([])); // Output: []

