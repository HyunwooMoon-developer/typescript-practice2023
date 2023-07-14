{
  /**
   * Type Inference
   */

  function print(message: any = 'hello') {
    console.log(message);
  }

  print('hello');
  print(1);

  function add(x: number, y: number) {
    return x + y;
  }

  add(1, 2);
}
