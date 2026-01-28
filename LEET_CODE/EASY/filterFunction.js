const filter = (arr, fn) => {
    let newA = []
    arr.forEach((n,i) => {
        if(fn(n,i)) {
            newA.push(n)
        }
    })
    return newA
};