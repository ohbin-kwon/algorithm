// https://programmers.co.kr/learn/courses/30/lessons/42889
// 2019 kakao blind recruitment 실패율

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  let count = 1;
  const failRates = {};
  while (count <= N) {
    const userCount = stages.length;
    const nowStages = stages.filter((stage) => stage > count);
    const failRate = (userCount - nowStages.length) / userCount;
    failRates[count] = failRate

    count += 1;
    stages = nowStages;
  }
  const answer = Object.keys(failRates).sort((a,b) => failRates[b] - failRates[a]).map(n => parseInt(n))

  return answer;
}

console.log(solution(N, stages));
