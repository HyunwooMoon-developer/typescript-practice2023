{
  interface IStack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class Stack<T> implements IStack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full');
      }
      this._size++;
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
    }
    pop(): T {
      // null == undefined, nul !== undefined
      if (this.head == null) {
        throw new Error('Stack is Empty');
      }

      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }

  const stack = new Stack<string>(10);

  stack.push('a');
  stack.push('b');
  stack.push('c');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
