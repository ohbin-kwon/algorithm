// https://ohbin-kwon.notion.site/2750-87be4789175b4dfc8688638ef5cf03dc

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
// 풀이1
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => Number(v));
input.shift()
input.sort((a,b) => a-b)
input.forEach(v => console.log(v))

// 풀이2
// let input = fs.readFileSync(filePath).toString().trim().split('\n').slice(1).sort((a,b) => a-b).join('\n')
// console.log(input)



