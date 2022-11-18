// 1차원배열2, 최댓값

let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../test.txt";
let input = fs.readFileSync(filePath).toString().split('\n').map(v => Number(v))


function solution(input) {
  const maxNum = Math.max(...input)
  const answer = maxNum + '\n' + (input.indexOf(maxNum)+1)
  return answer
}

console.log(solution(input))