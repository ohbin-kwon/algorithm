let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(filePath).toString().trim()

let count = 0
let sum = 0
while(input > sum){
  count++
  sum += count
}

let index = sum - input
const first = count - index
const second = index + 1

if(count % 2 === 0) {
  console.log(first +'/' + second)
}else{
  console.log(second +'/' + first)
}