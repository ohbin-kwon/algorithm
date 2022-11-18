let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [_, k] = input[0].split(' ')
const participantArray = input[1].split(' ')
participantArray.sort((a,b) => b-a)
console.log(participantArray[k-1])
