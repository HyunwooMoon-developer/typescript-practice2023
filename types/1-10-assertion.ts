{
  /**
   * Type Assertions
   */

  function jsStrFunc(): any {
    return 2;
  }

  const result = jsStrFunc();
  (result as string).length;
  <string>result.length;

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  //numbers.push(2) <= bad
  numbers.push(2);

  const button = document.querySelector('class');
  button!.nodeValue;
}
