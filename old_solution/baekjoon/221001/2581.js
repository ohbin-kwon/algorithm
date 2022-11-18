let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => Number(v))

function prime(n) {
  if(n === 1) return false
  if(n === 2) return true
  for ( let i= 2; i <= Math.ceil(Math.sqrt(n)); i++){
    if(n%i === 0) return false
  }
  return true
}

function solution (M, N) {
  let sum = 0
  let min = 10001;
  for (let i = M; i<= N; i++){
    if(prime(i)){
      sum += i
      if(i < min){
        min = i
      }
    }
  }
  if(sum === 0){
    return console.log(-1)
  }
  console.log(sum)
  console.log(min)
}
solution(...input)
