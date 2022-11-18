// 1차원배열4 : 평균

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const size = Number(input[0]);
const numArray = input[1].split(' ').map((v) => Number(v));

function solution(size, numArray) {
  const M = Math.max(...numArray);
  const newArray = numArray.map((v) => (v / M) * 100);
  const sum = newArray.reduce((a, b) => a + b, 0);
  return sum / size;
}

console.log(solution(size, numArray))