let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim();
const alpha = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const answer = alpha.map(s => {
  return input.indexOf(s)
})

console.log(answer)

