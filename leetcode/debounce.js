/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = (fn, t) => {
  let timer; // Инициализируем пустой таймер

  // Возвращаем функцию, в которой проксируем полученные аргументы для нужной функции
  return function(...args) {
    clearTimeout(timer); // чистим старый таймаут
    timer = setTimeout(() => fn(...args), t); // создаем новый таймаут
  }
};