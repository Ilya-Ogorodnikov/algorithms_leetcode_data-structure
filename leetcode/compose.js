/**
 * Обычная реализация функции compose из функционального программирования;
 * По массиву полученных функций проходимся в обратном порядке и вызываем их
 * с передачей соответствующего аргумента
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
	return (x) => {
    for (let i = functions.length - 1; i >= 0; i-- ) {
        x = functions[i](x);
    }

    return x;
  }
};