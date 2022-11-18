let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift()

const answer = input.map(word => {
  const wordArray = word.split('')
  const checker = []
  let isGroupWord = true;

  // forEach문이 끝나지 않고 loop를 돌기에 사용한 for문 크게 시간을 많이 초과하지는 않는다
  // for (let i = 0; i < wordArray.length; i++){
  //   console.log(i)
  //   if(wordArray[i] === wordArray[i+1]) continue
  //   if(checker.includes(wordArray[i])) {
  //     isGroupWord = false
  //     break
  //   }
  //   checker.push(wordArray[i])
  // }

    wordArray.forEach((s,i) => {
    if(s === wordArray[i+1]) return
    if(checker.includes(s)) {
      isGroupWord = false
      return
    }
    checker.push(s)
  })

  return isGroupWord
})
const trueLength = answer.filter(v => v)
console.log(trueLength.length)

