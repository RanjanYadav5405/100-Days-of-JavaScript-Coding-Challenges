// ? Write a function to sort an array of numbers in an ascending order.

// I Example usage:
// console.log(sortAscending([5, 3, 1, 81)); // Output: [1, 3, 5, 8]
// /console. log(sortAscending([5, 3, 10, 81)); // Output: [3, 5, 8,10]

//todo Requirements:

//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort method.

//===========================================================
// with using sort mathod

// const sortAscending = (array) => {
//     return array.sort((a,b)=> a-b)
// }


// console.log(sortAscending([5, 3, 1, 81]));
//====================

// without using sort method using bubble sort()

const sortAscending = (array) => {
    let i, j, temp;

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

console.log(sortAscending([5, 3, 1, 81]));