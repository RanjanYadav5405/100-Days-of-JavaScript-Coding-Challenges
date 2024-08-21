// Liner Search
const linearSearch = (a, data) => {

    let newArr = []
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] === data) {
            // newArr.push(i)

            return `Element is found at index ${i}`
        }
    }

    // return newArr
    return -1
}


console.log(linearSearch([65, 3, 64, 1, 4, 4, 3, 78], 4)) //Element is found at index 4
