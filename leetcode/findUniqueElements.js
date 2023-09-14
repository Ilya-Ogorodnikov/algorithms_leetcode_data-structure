// Даны два отсортированных массива.
// Вывести все элементы первого массива,
// которые не встречаются во втором.

/**
 * Алгоритм решения
 * Первый цикл `while` выполняется, пока указатель `i` меньше длины первого массива `arr1` и указатель `j` меньше длины второго массива `arr2`. Внутри цикла мы сравниваем элементы `arr1[firstPointer]` и `arr2[secondPointer]`.

  Если `arr1[firstPointer]` меньше `arr2[secondPointer]`, это означает, что элемент `arr1[firstPointer]` не встречается во втором массиве `arr2` и может быть считан как уникальный элемент. Мы добавляем его в массив `uniqueElements` с помощью метода `push` и увеличиваем значение `firstPointer` для перехода к следующему элементу в первом массиве.

  Если `arr1[firstPointer]` больше `arr2[secondPointer]`, это означает, что элемент `arr1[firstPointer]` уже присутствует во втором массиве `arr2` и не является уникальным. В этом случае мы увеличиваем значение `secondPointer` для перехода к следующему элементу во втором массиве и пропускаем добавление элемента в `uniqueElements`.

  Если `arr1[firstPointer]` равно `arr2[secondPointer]`, это означает, что элемент уже присутствует в обоих массивах. В этом случае мы увеличиваем значения `firstPointer` и `secondPointer`, чтобы перейти к следующим элементам в обоих массивах.

  После того как один из указателей достигает конца своего массива, второй цикл `while` обрабатывает оставшиеся элементы в первом массиве `arr1`. Он добавляет оставшиеся элементы в `uniqueElements`, так как они уже не могут быть найдены во втором массиве.

  В итоге, когда оба цикла завершаются, возвращаем массив `uniqueElements`, который содержит элементы первого массива `arr1`, не встречающиеся во втором массиве `arr2`.
 */

const array1 = [0, 1,21,35,41,54]
const array2 = [1,2,3,4,5,16,17,18,19]

const findUniqueElements = (arr1, arr2) => {
  let firstPointer = 0;
  let secondPointer = 0;

  const uniqueElements = [];

  while(firstPointer < arr1.length && secondPointer < arr2.length) {
    if (arr1[firstPointer] === arr2[secondPointer]) {
      firstPointer++;
      secondPointer++;
      continue;
    }

    if (arr1[firstPointer] < arr2[secondPointer]) {
      uniqueElements.push(arr1[firstPointer]);
      firstPointer++;
    } else {
      secondPointer++;
    }
  }

  
  while (firstPointer < arr1.length) {
    uniqueElements.push(arr1[firstPointer]);
    firstPointer++;
  }

  return uniqueElements;
}
