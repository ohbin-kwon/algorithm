let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim()
const number = Number(input)

function solution(number) {
  let index = 1
  let range = 1
  while(number > range){
    range += index*6
    index++
  }
  return index
}
console.log(solution(number))

// // 더 빠름
// let index = 1
// let range = 1
// while(number > range){
//   range += index*6
//   index++
// }
// console.log(index)