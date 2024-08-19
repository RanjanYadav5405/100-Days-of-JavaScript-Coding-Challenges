const validatePassword =(password) =>{
    
    return /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,}/g.test(password)
}





console.log(validatePassword("Rpads@skfe123")) //true
console.log(validatePassword("Ranjanyadav"))  //false
console.log(validatePassword("pads@skfe"))    //false
console.log(validatePassword("padsKumarYadav"))  //false