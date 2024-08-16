//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

function findMode(arr) {
    // Your code here
    let counts = {}
    let mode, Max = 0
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1
        if( counts[num] > Max){
            Max = counts[num]
            mode = num

        }
        
    }
    return mode;

}
console.log(findMode([1, 2, 2, 3, 1, 4, 2, 1])); // Output: 2
//* Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).