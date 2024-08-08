// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are
//equal (i.e., contain the same elements in the same order),and false otherwise.


const arraysAreEqual = (arr1, arr2) =>{
    if(arr1.length !== arr2.length ){
        return false;
    }

    return arr1.every((element, index) => element === arr2[index])
    
}



console.log(arraysAreEqual([1,2,3],[1,2,3])) //true
console.log(arraysAreEqual([1,2,3], [1,2,4])) // false
console.log(arraysAreEqual([],[]))  // true