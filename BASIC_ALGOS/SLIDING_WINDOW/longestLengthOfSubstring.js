{/* LEGNTH ONLY */}
const lloss = (str) => {
    let lft = 0
    let best = 0
    const seen = new Set()

    for(let rght = 0; rght < str.length; rght++) {
        while(seen.has(str[rght])) {
            seen.delete(str[lft])
            lft++
        }

        seen.add(str[rght])
        best = Math.max(best, rght - lft + 1)
    }

    return best
}

{/* LENGTH + OBJECT */}
const llossws = (str) => {
    let lft = 0
    let bstlen = 0
    let bststrt = 0 

    const seen = new Set()

    for(let rght = 0; rght < str.length; rght++) {
        while(seen.has(str[rght])) {
            seen.delete(str[lft])
            lft++
        }

        seen.add(str[rght])
        const len = rght - lft + 1
        if(len > bstlen) {
            bstlen = len
            bststrt = lft
        }
    }

    const bstsub = str.slice(bststrt, bststrt + bstlen)
    return {[bstlen] : bstsub}
}

{/* STRING PROTOTYPE FUNCTION */}
String.prototype.longestSubstring = function() {
    let lft = 0
    let bstLen = 0
    let bstStrt = 0

    const seen = new Set()
    
    for(let rght = 0; rght < this.length; rght++) {
        while(seen.has(this[rght])) {
            seen.delete(this[lft])
            lft++
        }

        seen.add(this[rght])
        const len = rght - lft + 1
        if(len > bstLen) {
            bstLen = len
            bstStrt = lft
        }
    }

    const bstSub = this.slice(bstStrt, bstStrt + bstLen)
    return {[bstLen]:bstSub}
}


const s1 = 'hohohohoh'
const s2 = 'hoholeinonehoho'
const s3 = 'brrrrbrrrrbrbrbrie'
const s4 = 'letherebelight'
const s5 = 'fibonnaci'
const s6 = 'superduperleapingleapord'
const s7 = 'whhhhiiiittteeeeeLION'

console.log('--------------------------------- ONLY LENGTH ---------------------------------')
console.log(lloss(s1))
console.log(lloss(s2))
console.log(lloss(s3))
console.log(lloss(s4))
console.log(lloss(s5))
console.log(lloss(s6))
console.log(lloss(s7))
console.log('--------------------------------- ONLY LENGTH ---------------------------------\n\n')

console.log('------------------------------- LENGTH + OBJECT -------------------------------')
console.log(llossws(s1))
console.log(llossws(s2))
console.log(llossws(s3))
console.log(llossws(s4))
console.log(llossws(s5))
console.log(llossws(s6))
console.log(llossws(s7))
console.log('------------------------------- LENGTH + OBJECT -------------------------------\n\n')

console.log('----------------- LENGTH + OBJECT AS STRING PROTOTYPE FUNCTION ----------------')
console.log(s1.longestSubstring())
console.log(s2.longestSubstring())
console.log(s3.longestSubstring())
console.log(s4.longestSubstring())
console.log(s5.longestSubstring())
console.log(s6.longestSubstring())
console.log(s7.longestSubstring())
console.log('----------------- LENGTH + OBJECT AS STRING PROTOTYPE FUNCTION ----------------')