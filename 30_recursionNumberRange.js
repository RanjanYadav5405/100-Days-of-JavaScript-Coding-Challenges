// Using Recursion Number Range Genration

const numberRange = (sNum, eNum,arr=[]) =>{
    if(sNum <=eNum){
        arr.push(sNum);
        return numberRange(sNum + 1, eNum, arr)
    }
    return arr;

   }

console.log(numberRange(0,5)) // [ 0, 1, 2, 3, 4, 5 ]
console.log(numberRange(3,7)) // [ 3, 4, 5, 6, 7 ]
console.log(numberRange(-2,2)) // [ -2, -1, 0, 1, 2 ]