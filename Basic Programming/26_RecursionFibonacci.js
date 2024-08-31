// fibonacci serise

const fibonacci = (num) =>{
    if(num <=0){
        return 0 // this is a base case of recursion
    }
    else if(num == 1){
        return 1  // this is a base case of recursion
    }
    else{
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}

console.log(fibonacci(5)) // Output 5