const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n')
const [N,M] = input.shift().split(' ') 
const [A, B, D] = input.shift().split(' ')
const mapArray = []
input.map(v => mapArray.push(v.split(' ')))
const checkMovedArray = new Array(4).fill(new Array(4).fill(0))

const dx = [0, 1, 0, -1]
const dy = [-1, 0, 1, 0]

function turnLeft(direction) {
  if(direction === 0){
    direction = 3
    return direction
  }
  direction -= 1
  return direction
}

function solution(direction, x , y) {
  const newDirection = turnLeft(direction)
  const newX = x + dx[newDirection]
  const newY = y + dy[newDirection]


}

function solution(){
  while(true){
    
  }
}