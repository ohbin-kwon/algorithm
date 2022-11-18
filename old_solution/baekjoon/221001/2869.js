let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(v => Number(v))

const [A, B, V] = input
console.log(Math.ceil((V-B)/(A-B)))


// while(true){
//   day ++
//   if(D + A >= V){
//     break
//   }
//   D += A - B
// }
// console.log(day)