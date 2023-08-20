const memoize = (fn) => {
  // Создаем кэш
  const cache = {};
  return function(...args) {
    // На основании полученных аргументов генерируем ключ для кэша
    const key = String(args);

    // Если в кэше хранится ключ по переданным аргументам, то возвращаем
    // вычисленный ранее резлуьтат
    if (key in cache) {
      return cache[key];
    }

    // В ином случае вызываем переданную функцию с аргументами
    // и помещаем результат в кэш
    const result = fn(...args);
    cache[key] = result;

    return result;
  }
}