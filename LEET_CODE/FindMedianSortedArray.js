const nums1 = [1,3,4,5]
const nums2 = [6,7,8,9,10] 
const nums3 = [6,7,8,9,10,11] 

const findMedianSortedArray = (nums1, nums2) => {
    const pa = [...nums1, ...nums2].sort((a,b) => a - b)
    if(pa.length % 2 !== 0) {
        return pa[Math.floor(pa.length / 2)]
    }
    return (pa[pa.length / 2 - 1] + pa[pa.length / 2]) / 2
}

console.log("this is the median: ",findMedianSortedArray(nums1, nums2))
console.log("this is the median: ",findMedianSortedArray(nums1, nums3))
