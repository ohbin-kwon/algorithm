let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split(" ").map( s => Number(s));

function solution(fixed, variable, sell) {
  if(variable >= sell) return -1
  const breakingPoint = fixed / (sell - variable) + 1
  return Math.floor(breakingPoint)
}
// 왜 이게더 느릴까
// function solution(A, B, C) {
//   if(B >= C) return -1
//   return Math.floor(A / (C - B) + 1)
// }
console.log(solution(...input))