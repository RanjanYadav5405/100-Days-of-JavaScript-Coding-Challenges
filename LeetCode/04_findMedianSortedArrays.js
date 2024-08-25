// findMedianSortedArrays

var findMedianSortedArrays = function(nums1, nums2) {
    let sum = nums1.concat(nums2)
    sum.sort((a,b) => a- b)
    
    let mid = Math.floor(sum.length/2)
    
    if(sum.length % 2 === 0){
        return (sum[mid] + sum[mid-1])/2
    }
    return sum[mid]
};

console.log(findMedianSortedArrays([1,3], [2])); // Output: 2
console.log(findMedianSortedArrays([1,2], [3,4])); // Output: 2.5

