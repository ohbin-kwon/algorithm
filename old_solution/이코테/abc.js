let fs = require('fs');
let input = fs.readFileSync('/Users/ohbin/Desktop/workspace/algo/test.txt').toString().split('\n');

const [N, M, K] = input[0].split(' ').map(v=> Number(v))
const array = input[1].split(' ').sort((a,b)=> b-a).map(v=> Number(v))

const first = array[0]
const second = array[1]

let A = parseInt(M/(K+1))
let B = M%(K+1)

// 5 8 3
// 6665 6665

// 66666 5 66
// 문제점 1
// number로 변환을안해줬다.
// 문제점 2 
// k에 +1을 해줘야

const result = (first*K + second)*A + first * B
console.log(result)

