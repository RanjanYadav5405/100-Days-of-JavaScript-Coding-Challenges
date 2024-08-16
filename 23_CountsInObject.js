// Write a JavaScript function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

// Here's what the function should do:
// Accept an array of numbers as input.
// Create an empty object called counts tocounts of each element.
// Iterate through each number in the array.


// Input
//===========================================================================================
const numbers = [1, 2, 2, 3, 1, 4, 2];  // output {'1': 2, '2': 3, '3': 1, '4': 1 }

let counts = {};

for (const element of numbers) {
    counts[element] = (counts[element] || 0) + 1;
}
console.log(counts)