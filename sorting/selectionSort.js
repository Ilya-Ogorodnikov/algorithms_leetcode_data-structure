// Time Complexity  O(n^2) (если с учетом коэффициентов, то О(1/2 * n^2))
// Space Complexity O(1)

// Алгоритм состоит в нахождении минимального элемента на каждой итерации внешнего цикла.
// при этом внутренний цикл проходится только по оставшейся части исходного массива после
// инкрементации внешнего цикла, тем самым достигается коэффициент 1/2 в общей оценки сложности

/**
 * Реализация сортировки выбором
 * @param {number[]} arr
 * @returns {number[]}
 */
const selectionSort = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    let indexMin = index;
    for (let j = index + 1; j < array.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    // Меняем элементы местами через дестрктурирующее присваивание,
    // чтобы не менять местами через дополнительную переменную
    [arr[index], arr[indexMin]] = [arr[indexMin], arr[index]];
  }
  return arr;
};

console.log(selectionSort(array));
