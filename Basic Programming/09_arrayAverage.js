// Challenge: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:

// Accept an array of numbers as input.
// Calculate the sum of all the numbers in the array.
// Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average.

//================================================================

const calculateAverage = (arr) =>{
    let sum = arr.reduce((accuEle, curEle) => accuEle + curEle ,0)
    return sum /arr.length;
}

console.log(calculateAverage([1,2,3,4,5,6]));
