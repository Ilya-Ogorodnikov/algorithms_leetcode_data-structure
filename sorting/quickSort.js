// Time Complexity  O(log2(n) * n)
// Space Complexity O(1)

// Алгоритм основывается на принципе "Разделяй и властвуй", то есть разбиваем наш массив
// на несколько подмассивов и рекурсивно выполняем для каждого сортировку

/**
 * Реализация быстрой сортировки (сортировки Хоара)
 * @param {number[]} arr
 * @returns {number[]}
 */
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const lessArray = [];
  const greaterArray = [];

  for (let index = 0; index < arr.length; index++) {
    if (index === pivotIndex) continue;

    if (arr[index] < pivot) {
      lessArray.push(arr[index]);
    } else {
      greaterArray.push(arr[index]);
    }
  }

  return [...quickSort(lessArray), pivot, ...quickSort(greaterArray)];
};
