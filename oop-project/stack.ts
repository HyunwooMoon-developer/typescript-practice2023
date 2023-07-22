interface IStack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class Stack implements IStack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full');
    }
    this._size++;
    const node: StackNode = { value, next: this.head };
    this.head = node;
  }
  pop(): string {
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

const stack = new Stack(10);

stack.push('a');
stack.push('b');
stack.push('c');

while (stack.size !== 0) {
  console.log(stack.pop());
}
