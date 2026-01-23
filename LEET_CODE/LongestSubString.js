const longestSubString = (s) => {
    let lft = 0;
    let ml = 0
    const seen = new Set()

    for(let rght = 0; rght < s.length; rght++) {
        while(seen.has(s[rght])) {
            seen.delete(s[lft]);
            lft++
        }

        seen.add(s[rght])
        ml = Math.max(ml, rght - lft + 1)
    }
    return ml
}


console.log(longestSubString('aaaabbbbbbbbcccccccccccccc'))