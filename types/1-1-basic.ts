{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array, object...
   */

  // number
  let num: number = 1;

  // string
  let str: string = 'hello';

  // boolean
  let boal: boolean = false;

  // undefined
  let age: number | undefined;

  // null
  let person: string | null;

  // unknown   bad
  let notSure: unknown = 0;
  notSure = 'hi';

  // any   bad
  let anything: any = 0;
  anything = 'hi';
  anything = true;

  // void
  function print(): void {
    console.log('print');
    return;
  }

  // never
  let throwError = (message: string): never => {
    throw new Error(message);
    while (true) {}
  };

  // object   bad
  let obj: object;

  let acceptSomeObject = (obj: object) => {
    console.log(obj);
  };

  acceptSomeObject({ name: 'Moon' });
  acceptSomeObject({ nums: [1, 2, 3] });
}
