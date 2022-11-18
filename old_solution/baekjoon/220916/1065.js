// 함수, 3, 한수

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim();

function han(num) {
  const numArray = num.split('').map((n) => Number(n));
  if (numArray.length === 1 || numArray.length === 2) return true;
  let d = numArray[1] - numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] + d !== numArray[i + 1]) {
      return false;
    }
    return true;
  }
}
let count = 0;
for (let i = 1; i < +input + 1; i++) {
  const stringNum = String(i);
  if(han(stringNum)) count++
}
console.log(count);

