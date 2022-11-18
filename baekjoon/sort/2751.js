// https://ohbin-kwon.notion.site/2751-2-765dcea80e9e42e99d173349dbb9cdcf

// 풀이 1
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift()
input.sort((a,b) => a - b)
console.log(input.join('\n'))

// 풀이 2
// let fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n').slice(1).map(v => Number(v)).sort((a,b) => a - b);
// console.log(input.join('\n'))
