/**
 * @param {Function} fn
 * @param {number} delay milliseconds
 * @return {Function}
 */
const debounce = (fn, delay) => {
  let timer; // Инициализируем пустой таймер

  // Возвращаем функцию, в которой проксируем полученные аргументы для нужной функции
  return function(...args) {
    clearTimeout(timer); // чистим старый таймаут
    timer = setTimeout(() => fn(...args), delay); // создаем новый таймаут
  }
};