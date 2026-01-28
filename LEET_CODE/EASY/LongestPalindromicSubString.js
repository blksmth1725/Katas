const s1 = "babad"
const s2 = "cbbd"
const s3 = "a"
const s4 = "ac"

const s5 = "racecar"
const s6 = "madam"
const s7 = "rotor"
const s8 = "deified"
const s9 = "civic"
const s10 = "level"
const s11 = "noon"
const s12 = "refer"
const s13 = "deed"
const s14 = "tattarrattat"
const s15 = "stats"
const s16 = "rotor"
const s17 = "deified"
const s18 = "civic"
const s19 = "level"
const s20 = "noon"
const s21 = "refer"
const s22 = "deed"
const s23 = "tattarrattat"
const s24 = "stats"
const s25 = "rotor"
const s26 = "deified"



const lpss = (s) => {
    const isPal = (str) => {
        let l = 0, r = str.length - 1;
        while (l < r) {
          if (str[l] !== str[r]) return false;
          l++; r--;
        }
        return true;
      };
    
      let lps = s.charAt(0);
    
      for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
          const cand = s.slice(i, j + 1);
          if (cand.length > lps.length && isPal(cand)) {
            lps = cand;
          }
        }
      }
      return lps;
}

console.log(lpss(s1))
console.log(lpss(s2))
console.log(lpss(s3))
console.log(lpss(s4))
console.log(lpss(s5))
console.log(lpss(s6))
console.log(lpss(s7))
console.log(lpss(s8))
console.log(lpss(s9))
console.log(lpss(s10))
console.log(lpss(s11))
console.log(lpss(s12))
console.log(lpss('ccc'))