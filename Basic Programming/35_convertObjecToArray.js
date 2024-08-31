// convert Object to Array

const obj ={
    Fullname : "Ranjan yadav",
    Age : 23,
    Address : "Nepal",
}
// console.log(Object.keys(obj));

// console.log(Object.values(obj));

console.log(Object.entries(obj));

console.log(Object.entries(obj).flat());

//==========================================================================
// convert Array to Object

const arr = [
    ["LastName", "Yadav"],
    ["Gender", "Male"],
    ["From", "Kathmandu"]
]

console.log(Object.fromEntries(arr))