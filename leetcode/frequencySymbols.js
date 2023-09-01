const string = "AAABBBZZZXYZMMMAAABB";
const string1 = "";

/**
 * Дана строка вида /[A-Z]/ ('AAABBBZZZXYZMMMAAABB')
 * нужно написать функцию, которая вернет строку вида A3B3Z3X1Y1Z1M3A3B2
 * Если приходит недопустимая строка, возвращаем пустую строку
 */

/**
 *
 * @param {string} str
 * @returns string
 */
const frequencySymbols = (str) => {
  if (!str || !str.match(/[A-Z]/)) return "";

  let result = "";
  let currentString = "";

  for (let index = 0; index <= str.length; index++) {
    const currentElement = str[index];
    const prevElement = str[index - 1];

    if (currentElement === prevElement) {
      currentString += currentElement;
    } else {
      if (prevElement) {
        currentString += prevElement;
        result += `${currentString[currentString.length - 1]}${
          currentString.length
        }`;
        currentString = "";
      }
    }
  }

  return result;
};
