// Binary Search (It only apply sorted array)

const binarySearch = (a, data) => {
    let l = 0; r = a.length - 1
    
    while( l <= r){
        let mid = Math.floor((l + r)/2)

        if( data === a[mid]){
                  return mid;
        }
        else if( data < a[mid]){
            r = mid - 1
        }
        else{
            l = mid + 1
        }
    }
    return -1
}

console.log(binarySearch([4,7,9,34,65,76,88,99],88))