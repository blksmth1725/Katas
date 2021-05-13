function wordsToMarks(string) {
  return [...string].reduce((res, c) => (res += c.charCodeAt() - 96), 0);
}

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));
