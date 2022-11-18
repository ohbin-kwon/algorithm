let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

let count = 0;
input.forEach( (n,i) => {
  if(n !== '=' && n !== '-' ) count++
  if(n === 'd' && input[i+1] === 'z' && input[i+2] === '=') count--
  if(n === 'l' && input[i+1] === 'j') count--
  if(n === 'n' && input[i+1] === 'j') count--
})
console.log(count)

// // 풀이 2
// let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

// function solution(input) {
//         for (let alphabet of croatia) {
//                 input = input.split(alphabet).join('a');
//         }
//         return input.length;
// }

// console.log(solution(input));
