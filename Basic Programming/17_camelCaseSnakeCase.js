//* Coding Challenge
//==============================================================================================
//? 18: Write a function to convert a string to camelCase & snake_case.

// Example usage:

const toCamelCase = (str) => {
    const word  = str.split(' ')
    // console.log(word)
    let camelCase = word.map((char, index)=>{
        if(index === 0){
            return char.toLowerCase();
        }
        return char.charAt(0).toUpperCase()+ char.slice(1).toLowerCase()
    })
    return camelCase.join('')
}


console. log(toCamelCase ("hello world ranjan from nepal")) // Output: helloWorldRanjanFromNepal

//=======================================================================================================
//todo HomeWork:

const toSnakeCase = (str) =>{
    const word = str.split('')
    console.log(word)
}



console. log(toSnakeCase("helloworld")); // Output: hello_world