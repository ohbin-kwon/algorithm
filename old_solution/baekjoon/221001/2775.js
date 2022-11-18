let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));
input.shift();

function getPeopleCount(floor, ho) {
  if (floor === 0) return ho;
  let count = 0;
  for (let i = 1; i <= ho; i++) {
    count += getPeopleCount(floor - 1, i);
  }
  return count;
}

// function curry(f) {
//   return (a) => {
//     return (b) => {
//       return f(a, b);
//     };
//   };
// }

const curry = (f) => (a) => (b) => f(a,b)

// const obj ={
//   a:1,
//   curry
// }

// const curriedFunc = curry.call(obj, getPeopleCount);

// const bindedCurry = curry.bind(obj)
// const curriedFunc = bindedCurry(getPeopleCount);

const curriedFunc = curry(getPeopleCount)

let proceeded = null;
for (let i = 0; i < input.length; i++) {
  if (!proceeded) {
    proceeded = curriedFunc(input[i]);
    continue;
  }
  console.log(proceeded(input[i]));
  proceeded = null;
}
