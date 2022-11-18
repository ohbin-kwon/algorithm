let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());

function solution(number) {
  let five = 0;
  while (true) {
    five++;
    console.log(five)
    if ((number - 5 * five) % 3 === 0) return (number - 5 * five) / 3 + five;
    if ((number - 5 * five) / 3 < 0) return -1;
  }
}

console.log(solution(input));
