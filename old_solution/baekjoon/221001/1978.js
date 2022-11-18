let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.shift()

let count = 0
input[0].split(' ').forEach(v => {
  if(prime(Number(v))) count ++
})
console.log(count)

function prime(n) {
  if(n === 1) return false
  if(n === 2) return true
  for ( let i= 2; i <= Math.ceil(Math.sqrt(n)); i++){
    if(i%n === 0) return false
  }
  return true
}
