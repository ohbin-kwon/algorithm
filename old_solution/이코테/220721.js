let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');

input.shift()

const array = input.map(v => v.split(' ').map(v => Number(v)))
console.log(array)

function solution(array){
  const minArray = array.map(v => Math.min(...v))
  console.log(minArray)
  const maxNum = Math.max(...minArray)
  return maxNum
}

console.log(solution(array))
