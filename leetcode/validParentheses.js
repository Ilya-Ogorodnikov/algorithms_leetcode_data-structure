// Time Complexity  O(n)
// Space Complexity O(n)
/**
 * 
 * @param {string} s 
 * @returns {boolean}
 */
const isValid = (s) => {
  // Если длина строки нечетная, то скобки в ней не могут быть валидными
  if (s.length % 2) return false;
  
  const stack = [];

  const dictionary = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  for (let idx = 0; idx < s.length; idx++) {

    // Идем по массиву и проверяем скобки. На каждую открывающую скобку
    // пушим в стек закрывающую и переходим к следующей итерации.
    if (dictionary[s[idx]]) {
      stack.push(dictionary[s[idx]]);
      continue;
    }

    // Если мы наткнулись на закрывающую скобку, ты вытаскиваем из стека 
    // последний элемент, который должен быть равен скобке, полученной на этой итерации.
    // Если условие не выполняется, то строка становится невалидной
    if (stack.pop() !== s[idx]) return false;
  }

  // Чтобы строка была валидной - к моменту окончания цикла стек должен быть пустым
  return !stack.length;
};