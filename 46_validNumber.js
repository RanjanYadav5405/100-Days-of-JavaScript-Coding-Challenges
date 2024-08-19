//Number should start 6,7,8,9 and length is 10

const vliadateNumber = (number) =>{

    return /[6789][\d]{9}/g.test(number)
}



console.log(vliadateNumber("32490540395"))  // false
console.log(vliadateNumber("9122452479"))  // true
console.log(vliadateNumber("2134324543"))  // false