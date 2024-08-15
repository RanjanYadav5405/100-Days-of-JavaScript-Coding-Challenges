//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then
// there is no single middle value; the median is then usually defined to be the mean of the two middle
// values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6.

//todo Tips

//? Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//? If the array has an even number of elements, the medigg is the average of the two middle elements.

// Step 1: Sort the array
// Step 2: Check if the array length is odd or even
// Step 3 for even length array
// Step 4 for odd length array

//============================================================================================================

const findMedian = (arr) => {
    let arrSort = arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2)

    console.log(arrSort);

    if (arrSort.length % 2 === 0) {

        return (arrSort[mid] + arr[mid-1]) /2;
    }

    return arrSort[mid];
};

console.log(findMedian([5, 3, 9, 1, 7])); // Output: 5
console.log(findMedian([2, 4, 6, 8])); // Output: 5
console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output: 6
