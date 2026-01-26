// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// Note that minor deviation from millis in the actual sleep duration is acceptable.

// Example 1:
// 
// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Example 2:
// 
// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

let count = 0
const sleep = async (millis) => {
    return new Promise((resolve) => setTimeout(resolve, millis))
}

console.log('Starting count at:',count)
sleep(3000).then(() => {
    count++
    console.log('count after 3 seconds',count)
})
sleep(5000).then(() => {
    count++
    console.log('count after 5 seconds',count)
})
sleep(6000).then(() => {
    count++
    console.log('count after 6 seconds',count)
})
sleep(1000).then(() => {
    count++
    console.log('count after 1 second',count)
})
sleep(10000).then(() => {
    count++
    console.log('count after 10 second',count)
})