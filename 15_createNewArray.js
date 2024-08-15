//15: Write a function to calculate the sum of squares of all elements in an array. For
// example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.
//  Example usage:

const sumOfSquares = (arr) =>{
    
    // let sum  = arr.map(e => e **2).reduce((a,b) => a + b,0)

    // let sum = arr.reduce((accum, curElem) => (accum + (curElem * curElem)),0)

    let sum = 0;
    for (const elem of arr) {
        sum += elem ** 2;
        
    }
    return sum
}

console. log(sumOfSquares([1, 2, 3])); // Output: 14