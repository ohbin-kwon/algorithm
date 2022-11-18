function solution(words, n) {

  return words.reduce(
    ({ result, duplicated_set }, current, idx) => {

      const is_exists = result.findIndex(v => v === current);

      if (is_exists !== -1) { // 중복된 값이 있을때,

        const [ duplicated_value ] = result.splice(is_exists, 1);
        duplicated_set.add(duplicated_value);

        return { result, duplicated_set }

      } else { // 중복된 값이 없을때,

        const is_duplicated = duplicated_set.has(current);

        if (is_duplicated) return { result, duplicated_set }

        result.push(current);
        return { result, duplicated_set }

      }

    },
    { result: [], duplicated_set: new Set() }
  ).result.sort((aft, bef) => {
    
    if (bef[n] < aft[n]) return 1;
    else if (bef[n] > aft[n]) return -1;
    else
      if (bef < aft) return 1;
      else if (bef > aft) return -1;
      else return 1;
    
  });

}


console.log(solution(["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"], 2));
console.log(solution(["banana", "cat", "car", "apple", "banana", "banana"], 0));
// ["brush", "sun", "brush", "bed", "car"] 출력은 ["car", "bed", "sun"]
// ["banana", "cat", "car", "apple", "banana", "banana"] 출력은 ["apple","car","cat"]