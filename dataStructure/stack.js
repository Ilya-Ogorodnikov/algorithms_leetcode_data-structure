// Стек следует принципу LIFO (Last In First Out — последним вошел, первым вышел).

class Stack {
  #size;
  #stack;

  constructor() {
    this.#size = 0;
    this.#stack = [];
  }

  // Добавить элемент в конец стека
  // Time Complexity O(1)
  push(element) {
    this.#stack[this.#size] = element;
    this.#size++;
  }

  // Вернуть последний элемент стека
  // Time Complexity O(1)
  peek() {
    return this.#stack[this.#size - 1];
  }

  // Удалить последний элемент стека
  // Time Complexity O(1)
  pop() {
    if (!this.#size) return;

    const lastElement = this.#stack[this.#size - 1];

    this.#size--;
    this.#stack.length = this.#size;

    return lastElement;
  }

  // Вернуть длину стека
  // Time Complexity O(1)
  get length() {
    return this.#size;
  }

  // Вернуть текущее наполнение стека
  // Time Complexity O(1)
  get print() {
    return this.#stack;
  }
}
