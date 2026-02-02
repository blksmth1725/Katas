const isAnagram = (s1,s2) => {
    if(s1.length !== s2.length) return false
    const count = {}
    for (const char of s1) {
        count[char] = (count[char] || 0) +1
    }
    for(const char of s2) {
        if(!count[char]) return false
        count[char]--
    }
    return true
}
const w1a = 'sidebar'
const w1b = 'airbeds'
const w2a = 'assert'
const w2b = 'tasers'
const w3a = 'aligners'
const w3b = 'realigns'

console.log(isAnagram(w1a,w1b))
console.log(isAnagram(w1a,w3b))
console.log(isAnagram(w2a,w2b))
console.log(isAnagram(w3a,w3b))
console.log(isAnagram(w3a,w1b))
console.log(isAnagram(w3a,w3b))

//npx create-react-app data-lab-fidget