console.log(1);
console.log(2);
const timeOutId = setTimeout(() => {
    console.log(3);
}, 1000)
// clearTimeout(timeOutId);
// setInterval(() => {
//     console.log(4);
// }, 1000)
console.log(5);
console.log(6);
let num = 0;
// num++ starts with 0 , ++num starts with 1
// setInterval(() => {
//     console.log(num++)
// }, 1000)

const intervalId = setInterval(() => {
    console.log(num++)
}, 1000)

// clearInterval(intervalId)