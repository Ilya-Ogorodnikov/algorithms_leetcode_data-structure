// Стек следует принципу LIFO (Last In First Out — последним вошел, первым вышел).

class Stack {
  #size;
  #stack;

  constructor () {
    this.#size = 0;
    this.#stack = [];
  }

  // Добавить элемент в конец стека
  push(data) {
    this.#stack[this.#size] = data;
    this.#size++;
  }

  // Вернуть последний элемент стека
  peek() {
    return this.#stack[this.#size - 1];
  }

  // Удалить последний элемент стека
  pop() {
    if (!this.#size) return;

    const lastElement = this.#stack[this.#size - 1];

    this.#size--;
    this.#stack.length = this.#size;

    return lastElement;
  }

  // Вернуть длину стека
  get length() {
    return this.#size;
  }

  // Вернуть текущее наполнение стека
  get log() {
    return this.#stack;
  }
}