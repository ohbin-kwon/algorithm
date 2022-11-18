let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.sort((a,b) => a-b)
const average = input.reduce((acc, cur) => acc + Number(cur), 0)/5
const center = input[2]
console.log(average +'\n'+ center)
