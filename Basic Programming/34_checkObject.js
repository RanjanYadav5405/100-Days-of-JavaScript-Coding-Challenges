//* Programming Challenge: Check Object Emptiness
//============================================================================
//? Write a function isEmptyObject that takes an object as input and
//determines whether it is empty or not. An empty object is defined as an
//object with no own properties

//? Your task is to implement the isEmptyObject function using
//JavaScript and return a message indicating whether the object is emptyor not.
//===========================================================================================================
function isEmptyObject(obj) {

    // return Object.keys(obj).length === 0 ? "It's empty" : "It's not empty"; //shorcuts
       
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return "It's not empty"; 
        }
    }
    return "It's empty";
    
}


console. log(isEmptyObject({ name: "vinod" })); // Output: "it's not empty
console.log(isEmptyObject({}));     // Output: "it's empty
console. log(isEmptyObject({ keyWithNull: null })) // Output: "it's not empty
console. log(isEmptyObject({ keyWithUndefined: undefined})) // Output: "it's not empty
