// 함수, 2, 셀프넘버

let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../test.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')
input.shift()