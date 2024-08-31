// validation hex color length is 3 or 6 and it should belong a-f or A-F

const validateHexColor = (hexColor) =>{

    return /^#([A-Za-z\d]{3}|[A-Za-z\d]{6})$/g.test(hexColor)
}



console.log(validateHexColor("#abf123")) // true
console.log(validateHexColor("#fff"))  // true
console.log(validateHexColor("#1323324")) //false
console.log(validateHexColor("abcdeef"))  //false
console.log(validateHexColor("sfdsdsssg"))  //false