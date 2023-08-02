
// Time Complexity  O(logn)
// Space Complexity O(1)

/**
 * Бинарный поиск эффективен только в случае отсортированного массива данных,
 * в ином случае быстродействие алгоритма сопоставимо с обычным поиском
 * @param {number[]} array 
 * @param {number} target 
 * @returns {number}
 */
const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length;

  // Если массив пустой, то искать в нем нечего
  if (!array.length) return -1;

  while (start < end) {
    // Индекс среднего элемента массива
    let middle = Math.floor((start + end) / 2);

    // Если по индексу в массиве мы получаем исходное число, то возращаем этот индекс
    if (array[middle] === target) return middle;

    // Если полученное по индексу значение меньше искомого,
    // то необходимо увеличить стартовый указатель, в ином случае
    // полученное число больше искомого, тогда уменьшаем конечный указатель
    if (array[middle] < target) {
      start++;
    } else {
      end--;
    }
  }

  // Если ничего не нашли - возвращаем -1
  return -1;
}