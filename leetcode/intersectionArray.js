const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 5, 6];

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 */
const intersection = (arr1, arr2) => {
  if (!arr1.length || !arr2.length) {
    return [];
  }

  let left = 0;
  let right = 0;

  const intersectionArray = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] === arr2[right]) {
      intersectionArray.push(arr1[left]);
      left++;
      right++;
      continue;
    }

    if (arr1[left] > arr2[right]) {
      right++;
    } else {
      left++;
    }
  }

  return intersectionArray;
};
