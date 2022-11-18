// 1차원배열3, 나머지

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

function solution(input) {
  const set = new Set();

  input.map((v) => {
    const remider = v % 42;
    set.add(remider);
  });
  return set.size;
}

console.log(solution(input))

// 정수는 굳이 사용하지 않아도 되고
// 공백이 필요한 상황에는 trim을 사용하면 안된다
// https://www.acmicpc.net/board/view/88610