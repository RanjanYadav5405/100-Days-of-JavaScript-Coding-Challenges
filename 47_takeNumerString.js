const takeNumber = (str) =>{
return str.match(/\d+/g)
}

console.log(takeNumber("Rajan123Yadav456"))  // ["123", "456"]
console.log(takeNumber("Raj1and2from5"))    //[1,2,3]
console.log(takeNumber("")) //null
