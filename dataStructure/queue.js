// Очередь напоминает стек.
// Разница состоит в том, что очередь следует принципу FIFO (First In First Out — первым вошел, первым вышел).

class Queue {
  #size;
  #queue;

  constructor() {
    this.#queue = [];
    this.#size = 0;
  }

  // Добавить элемент в очередь
  // Time Complexity O(1)
  enqueue(element) {
    this.#queue[this.#size] = element;
    this.#size++;
  }

  // Удалить первый элемент
  // Time Complexity O(n)
  dequeue() {
    if (!this.#size) {
      return;
    }

    const firstElement = this.#queue[0];

    for (let index = 0; index < this.#size; index++) {
      this.#queue[index] = this.#queue[index + 1];
    }

    this.#size--;
    this.#queue.length = this.#size;

    return firstElement;
  }

  // Вернуть первый элемент очереди
  // Time Complexity O(1)
  front() {
    if (!this.#size) return;

    return this.#queue[0];
  }

  // Пустая ли очередь
  // Time Complexity O(1)
  get isEmpty() {
    return !this.#size;
  }

  // Вернуть размер очереди
  // Time Complexity O(1)
  get size() {
    return this.#size;
  }

  // Вывести текущее наполнение очереди
  // Time Complexity O(1)
  get print() {
    return this.#queue;
  }
}
