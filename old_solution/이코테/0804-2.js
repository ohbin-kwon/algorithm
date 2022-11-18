let fs = require('fs');
let input = Number(fs.readFileSync('test.txt').toString())

function makeArray(number) {
  return [...Array(number).keys()]
}

function solution(input) {
  let count = 0
  let limit = input + 1

  for(let h of makeArray(limit)){
    if(h === 3 || h === 13 || h === 23){
      count += 3600
      }else{
        for(let m of makeArray(60)){
          for(let s of makeArray(60)){
            if( String(m).includes("3") || String(s).includes("3")){
              count += 1
            }
          }
        }
      }
  }
  return count
}


console.log(solution(input))
