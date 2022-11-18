let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ').map(v => Number(v));
const [N, K] = input

function solution(N,K) {
  let count = 0
  let now = N;
  const first = (N,K) => N/K
  const second = (N) => N - 1

  while(now > 2){
    count ++
    now = now%K === 0 ? first(now,K) : second(now)
  }
  return count
}
console.log(solution(N,K))