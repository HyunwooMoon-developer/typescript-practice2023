{
  // Array
  const fruits: string[] = ['tomato', 'banana'];
  const scores: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  const [name, age] = student;
}
