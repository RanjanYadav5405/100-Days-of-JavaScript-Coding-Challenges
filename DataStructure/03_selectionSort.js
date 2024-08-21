const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for(let j = i + 1; j < arr.length; j++){

            if(arr[j] < arr[min]){
                min = j
            }
        }
        if( min != i){
            let temp = arr[i];
            arr[i] = arr[min]
            arr[min] = temp
        }

    }
    return arr
}


console.log(selectionSort([45, 6, 2, 6, 2, 1, 9]))  // [1, 2,  2, 6, 6, 9, 45]
 