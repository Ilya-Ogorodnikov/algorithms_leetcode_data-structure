
/**
 * Алгоритм решения
 * Мы идем по каждому символу в строке `s` и подсчитываем количество нулей и единиц в переменных `countZeros` и `countOnes` соответственно.

 * Если количество нулей равно количеству единиц, это означает, что мы нашли сбалансированную подстроку. Мы сравниваем текущую длину с максимальной длиной, и если текущая длина больше, обновляем значение `maxLen`.

 * Если количество единиц становится больше количества нулей, то мы обнуляем счетчики для начала новой сбалансированной подстроки.

 * По завершении цикла возвращаем максимальную длину сбалансированной подстроки `maxLen`.
 * @param {string} s
 */
const findLongestBalancedSubstring = (s) => {
  let maxLen = 0;
  let countZeros = 0;
  let countOnes = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      countZeros++;
    } else {
      countOnes++;
    }

    if (countZeros === countOnes) {
      maxLen = Math.max(maxLen, countZeros + countOnes);
    } else if (countOnes > countZeros) {
      countZeros = 0;
      countOnes = 0;
    }
  }

  return maxLen;
}

const s = "10011100110";
const result = findLongestBalancedSubstring(s);
