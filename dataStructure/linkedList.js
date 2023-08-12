// связный список — это цепочечная структура данных, где каждый узел состоит из двух частей:
// данных узла и указателя на следующий узел.
// Связный список и условный массив являются линейными структурами данных с сериализованным хранилищем.

class Node {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

class LinkedList {
  #head;
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  // Добавить элемент в конец списка
  // Time Complexity O(1)
  append(data) {
    const newNode = new Node(data);

    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
      this.#size++;
      return;
    }

    this.#tail.next = newNode;
    this.#tail = newNode;
    this.#size++;
  }

  // Добавить элемент в начало списка
  // Time Complexity O(1)
  prepend(data) {
    const newNode = new Node(data, this.#head);

    this.#head = newNode;

    if (!this.#tail) {
      this.#tail = newNode;
    }

    this.#size++;
  }

  // Удалить элементы, у которых совпадает переданное value
  // Time Complexity O(n + m)
  // Такая сложность обусловлена тем, что количество элементов во втором цикле
  // будет настолько меньше, насколько было итераций в первом цикле
  // Возвращаем из метода последний удаленный элемент
  remove(value) {
    if (!this.#head) {
      return;
    }

    let deletedNode = null;

    while (this.#head && this.#head.value === value) {
      deletedNode = this.#head;
      this.#head = this.#head.next;
      this.#size--;
    }

    let currentNode = this.#head;

    if (currentNode) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
          this.#size--;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.#tail.value === value) {
      deletedNode = this.#tail;
      this.#tail = currentNode;
    }

    return deletedNode;
  }

  // Найти определенный элемент по переданному значению
  // Time Complexity O(1)
  find(value) {
    if (!this.#head || !this.#tail) {
      return;
    }

    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return;
  }

  // Вставка нового элемента после конкретного элемента
  // Time Complexity O(1)
  insertAfter(data, after) {
    const foundElement = this.find(after);

    if (!foundElement) {
      return;
    }

    const newNode = new Node(data, foundElement.next);

    foundElement.next = newNode;

    if (newNode.next === null) {
      this.#tail = newNode;
    }
  }

  // Пустой ли список
  // Time Complexity O(1)
  get isEmpty() {
    return !this.#size;
  }

  // Вывести текущее наполнение списка
  // Time Complexity O(1)
  get print() {
    return {
      head: this.#head,
      tail: this.#tail,
    };
  }

  // Вывести длину списка
  // Time Complexity O(1)
  get length() {
    return this.#size;
  }
}
