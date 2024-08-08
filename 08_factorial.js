// Challenge: Factorial Finder
// Write a function factorial that takes a non-negativeinteger num as input and returns its factorial. 
//The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less thanPul|up for precise seel n. The factorial of 0 is defined as 1.
// Here are some examples of factorial ca
const  factorial =(num) =>{
    let fact = 1
    for(let i =1;i<=num;i++){
        fact *=i
    }
    return fact
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))
// Exploring Recursive Function 
