// Time Complexity O(n)
// Space Complexity O(1)

// Усовершенствованный Алгоритм Кадане. Доработка состоит в возможности работать
// с массивом в случае, когда он состоит из отрицательных чисел

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  // Если массив пустой, то сумма нулевая
  if (!nums.length) return 0;

  // Если в массиве всего один элемент, то этот элемент
  // и является суммой
  if (nums.length === 1) return nums[0];

  let currentSum = 0;
  let maxSum = Number.MIN_VALUE;
  let maxNegativeSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {

    // Данный if предназначен для работы с отрицательными числами
    if (nums[i] <= 0 && maxNegativeSum <= nums[i]) {
      maxNegativeSum = nums[i];
    }

    // Если при очередной итерации мы получили текущую сумму меньше нуля,
    // то сбрасываем ее в ноль, поскольку сумма подмассива была сильно изменена
    if (currentSum < 0) {
      currentSum = 0;
    }

    // Элемент текущей итерации прибавляем к текущей сумме
    currentSum += nums[i];

    // Если текущая сумма больше текущей максимальной суммы,
    // то перезаписываем ее
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  // Если положительная сумма неизменилась от своего исходного значения,
  // то происходила работа с массивом отрицательных чисел, результат которой 
  // и возращаем, иначе возвращаем результат работы с положительными числами числами
  return maxSum === Number.MIN_VALUE ? maxNegativeSum : maxSum;
};

// console.log(maxSubArray([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // -1
// console.log(maxSubArray([-2, -1, -3, -4, -1, -2, -1, -5, -4, 0])); // 0
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
