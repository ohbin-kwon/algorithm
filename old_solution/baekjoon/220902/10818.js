// 1차원배열1, 최소,최대

let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../test.txt";
let input = fs.readFileSync(filePath).toString().split('\n')
let numArray = input[1].split(' ').map(v => Number(v))


function solution(numArray){
  const answer = Math.min(...numArray) + ' ' + Math.max(...numArray)
  return answer
}

console.log(solution(numArray))
