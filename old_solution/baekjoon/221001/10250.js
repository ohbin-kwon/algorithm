let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.shift()

input.map(v => v.split(' ').map(a => Number(a))).forEach(v => solution(...v))

function solution(H,W,N) {
  let floor = N
  let ho = 1

  while(floor > H) {
    floor -= H
    ho++
  }

  if(ho >= 10) return console.log(`${floor}${ho}`)
  console.log(`${floor}0${ho}`)
}