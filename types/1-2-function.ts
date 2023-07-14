{
  // JavaScript
  let jsAdd = (/* num1, num2 */) => {
    /* return num1 + num2; */
  };

  // TypeScript
  let tsAdd = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  // JavaScript
  let jsFetchNum = (/* id */) => {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  };

  // TypeScript
  let tsFetchNum = (id: number | string): Promise<number | string> => {
    return new Promise((resolve, reject) => {
      resolve(id);
    });
  };

  // Optional Parameter
  let printName = (firstName: string, lastName?: string) => {
    console.log(`${firstName} ${lastName}`);
  };

  // Default Parameter
  let printMessage = (message: string = 'message') => {
    console.log(message);
  };

  // Rest Parameter
  let addNumbers = (...rest: number[]): number => {
    return rest.reduce((a, b) => a + b);
  };

  console.log(addNumbers(1, 2, 3, 4, 5));
}
