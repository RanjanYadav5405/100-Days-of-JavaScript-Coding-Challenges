const bubbleSort = (arr) =>{
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j<arr.length-1-i ; j++ ){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
        }
    }
    }
    return arr
}

console.log(bubbleSort([45,6,2,6,2,1,9])) // [1, 2,  2, 6, 6, 9, 45]