// Time Complexity  O(n^2)
// Space Complexity O(1)

// Алгоритм состоит в том , что попарно сравниваются два элемента,
// и если значение следующего элемента больше текущего, то меняем их местами

/**
 * Реализация пузырьковой сортировки
 * @param {number[]} arr
 * @returns {number[]}
 */
const bubbleSort = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        // Меняем элементы местами через дестрктурирующее присваивание,
        // чтобы не менять местами через дополнительную переменную
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort(array));
