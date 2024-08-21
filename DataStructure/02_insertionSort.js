const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = temp
    }
    return arr
}


console.log(insertionSort([45, 6, 2, 6, 2, 1, 9])) // [1, 2,  2, 6, 6, 9, 45]