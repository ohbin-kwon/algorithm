// 1차원배열, 6, 평균은 넘겠지

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

function solution(array) {
  array.forEach((v) => {
    const newArray = v.split(' ').map(number => Number(number))
    const n = newArray.shift()

    const sum = newArray.reduce((acc, cur) => acc + cur)
    const average = sum/n

    const count = newArray.filter(v => v > average)
    console.log(((count.length/n)*100).toFixed(3) + '%')
  });
}

solution(input)