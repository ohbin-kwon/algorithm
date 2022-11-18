let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n')

const limit = input[0]
const directionArray = input[1].split(' ')


function solution(limit, directionArray) {

  let column = 1
  let row = 1

  for (let direction of directionArray){
    switch(direction){
      case 'L':
        if(row === 0) continue
        row -= 1
      case 'R':
        if(row === limit) continue
        row += 1
      case 'U':
        if(column === 0) continue
        column -= 1
      case 'D':
        if(column === limit) continue
        column += 1
    }
  }
console.log(column, row)

}

solution(limit, directionArray)