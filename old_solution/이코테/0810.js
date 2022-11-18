const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n')
const [ M, N ] = input.shift()
const array = input.map(v => v.split('').map(v => Number(v)))

function dfs(x, y) {
  if(x < 0 || x > N -1 || y < 0 || y > M - 1){
    return false
  }
  if(array[x][y] === 0){
    array[x][y] = 1
  }
}

