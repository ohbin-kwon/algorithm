let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift()
const answer = input[0].split('').map(s => Number(s)).reduce((a,b)=> a +b)
console.log(answer)

