// "use strict"
// 수 정렬하기 3
// https://www.acmicpc.net/problem/10989

// 1번 풀이 - 메모리 초과
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
// let result = fs.readFileSync(filePath).toString().trim().split('\n').map(v => Number(v)).sort((a,b) => a - b).join('\n')
// console.log(result)

// 2번 풀이 - 자바스크립트로는 메모리 초과
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => Number(v))
input.shift()
function countingSort(arr){
  return arr.reduce( (acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [] )
            .reduce( (acc, n, i) => acc.concat(Array(n).fill(i)), [] ); 
}
console.log(countingSort(input))