// 1차원배열, 5, ox 퀴즈

let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../test.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.shift()

String.prototype.forEach = Array.prototype.forEach

function solution(oxArrays){
  oxArrays.forEach(oxString => {
    let count = 0;
    let score = 0
    let answer = 0;
    oxString.forEach(v => {
      const validation = v === 'O' ? true : false
      if(validation) {
        count++
        score = count
      }else{
        score = 0
        count = 0
      }
      answer += score
    })
    console.log(answer)

  })
}

solution(input)