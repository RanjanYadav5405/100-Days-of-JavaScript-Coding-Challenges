const doubleFirstDuplicate = (arr) => {

    for(let i = 0; i < arr.length; i++) {

        for(let j = i + 1; j < arr.length; j++){
            if(arr[i]=== arr[j]){
                arr[i] = arr[i] ** 2
                
            }
            

        }
    }
    return arr


}


console.log(doubleFirstDuplicate([1, 2, 4, 6, 4, 2, 8, 3, 3]))