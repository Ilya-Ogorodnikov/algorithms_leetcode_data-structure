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
  enqueue(element) {
    this.#queue[this.#size] = element;
    this.#size++;
  }

  // Удалить первый элемент
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
  front() {
    if (!this.#size) return;

    return this.#queue[0];
  }

  // Пустая ли очередь
  get isEmpty() {
    return !this.#size;
  }

  // Вернуть размер очереди
  get size() {
    return this.#size;
  }

  // Вывести текущее наполнение очереди
  get print() {
    return this.#queue;
  }
}
