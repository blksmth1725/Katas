const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const arr2 = [7,9,11,2,62,100,33,25,66,999,40,50,57,89,88,15,13,12,5,10]

const bs = (a, n) => {
    let l = 0
    let r = a.length - 1

    while(l <= r) {
        const mIdx = Math.floor((l + r) / 2)
        const mNum = a[mIdx]

        if(mNum === n) {
            return {mIdx, mNum}
        } else if (mNum < n) {
            l = mIdx + 1
        } else {
            r = mIdx - 1
        }
    }
    return -1
}

const bsus = (a,n) => {
    const sArr = a.sort((a,b) => a-b)
    let l = 0
    let r = a.length - 1

    while(l <= r) {
        const mIdx = Math.floor((l+r)/2)
        const mNum = sArr[mIdx]
        if (mNum === n) {
            return {mIdx, mNum}
        } else if (mNum < n) {
            l = mIdx + 1
        } else {
            r = mIdx - 1
        }
    }
    return -1
}


console.log(bs(arr1, 4))
console.log(bsus(arr2, 57))