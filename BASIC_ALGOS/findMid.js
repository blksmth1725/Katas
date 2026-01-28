const a3 = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]
const a4 = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,200]

Array.prototype.mddlOfArr = function(){
    let lft = 0
    for(let rght = 0; rght < this.length; rght += 2) {
        if(rght + 1 >= this.length) {
            return {[lft]: this[lft]}
        }
        lft++
    }
}

Array.prototype.mddlOfArrTwo = function(){
    if(this.length === 0) return null

    const mid = Math.floor((this.length - 1)/2)
    return {[mid]:this[mid]}
}

console.log(a3.mddlOfArr())
console.log(a4.mddlOfArr())
console.log(a3.mddlOfArrTwo())
console.log(a4.mddlOfArrTwo())