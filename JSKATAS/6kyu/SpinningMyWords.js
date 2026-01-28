//Write a function that takes in a string of one or more words, and returns the same string
//, but with all words that have five or more letters reversed (just like the name of this kata). 
//Strings passed in will consist of only letters and spaces. 
//Spaces will be included only when more than one word is present.

const str1 = "Hey fellow warriors" 
const str2 = "This is a test"       
const str3 = "This is another test"

const spinWords = (str) => {
    const words = str.split(' ')
    return words.map((a) => {
        if(a.length >= 5) {
           return a.split('').reverse().join('')
        } else {
            return a
        }
    }).join(' ')
}

console.log(spinWords(str1))
console.log(spinWords(str2))
console.log(spinWords(str3))