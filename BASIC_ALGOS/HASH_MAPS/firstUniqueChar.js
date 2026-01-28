const firstUniqueChar = (s) => {
    const count = {}
    for(const char of s) {
       count[char] = (count[char] || 0) + 1
    }

    for(let i = 0; i < s.length; i++) {
        if(count[s[i]] === 1) return {[i] : s[i]}
    }
    return -1
}

const s1 = 'lovely'
const s2 = 'leetcode'
const s3 = 'hohoho'
const s4 = 'racecar'
const s5 = 'zzzzziiiiip'


console.log(firstUniqueChar(s1))
console.log(firstUniqueChar(s2))
console.log(firstUniqueChar(s3))
console.log(firstUniqueChar(s4))
console.log(firstUniqueChar(s5))