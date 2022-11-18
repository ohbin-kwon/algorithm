let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('')

const [alpha, num] = input

const p = {
  a: 1,
  b: 1,
  c: 2,
  d: 2,
  e: 2,
  f: 2,
  g: 1,
  h: 1
}

const r = {
  "1": 1,
  "2": 1,
  "3": 2,
  "4": 2,
  "5": 2,
  "6": 2,
  "7": 1,
  "8": 1
}



let count = 0

function solution(alpha, num) {
  if(num === "1" || num === "8" ){
    a = 1
  }else{
    a = 2
  }
  if(alpha === "a" || alpha === "h" ){
    b = 1
  }else{
    b = 2
  }
  count += p[alpha] * a
  count += r[num] * b

  return count
}

console.log(solution(alpha, num))

// function solution2(alpha, num)