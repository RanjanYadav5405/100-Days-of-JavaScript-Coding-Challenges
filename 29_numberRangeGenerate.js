// Number Range Genrators

const numberRange = (sNum, eNum) =>{
     let result =[];
     if(sNum<=eNum){

      for(let i = sNum; i<= eNum; i++){
        result.push(i)
      }
    }
      return result;
    }

console.log(numberRange(0,5)) // [ 0, 1, 2, 3, 4, 5 ]
console.log(numberRange(3,7)) // [ 3, 4, 5, 6, 7 ]
console.log(numberRange(-2,2)) // [ -2, -1, 0, 1, 2 ]