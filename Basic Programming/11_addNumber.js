//11: Write a function that takes a number as input and returns the sum of its digits.

console.log(Array.of(1,2,3,4,5)) // [1,2,3,4,5]

console.log(String(123456).split("").map(Number)) // [1,2,3,4,5,6]


const sumOfDigits =(num) =>{
    let a = Array.from(String(num), Number)
    return a.reduce((accu,value) => accu + value,0)
}

console.log(sumOfDigits(12345))
console.log(sumOfDigits(123456789))


//==================================================================
//tuple to array using iteratable

// const f = (...args) => {
//     // let a = args.join("");
//     console.log(args);
  
// }

// console.log(f(1, 2, 3)); // output [1,2,3]


