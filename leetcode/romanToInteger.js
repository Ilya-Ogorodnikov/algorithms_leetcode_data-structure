// Time Complexity  O(n)
// Space Complexity O(1)

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {

  // Если строка пустая, то сумма равно нулю
  if (!s.length) return 0;

  // Словарь с римскими цифрами и их значения в арабских цифрах
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      result += map[s[i + 1]] - map[s[i]];
      i++;
    } else {
      result += map[s[i]];
    }
  }

  return result;
};
