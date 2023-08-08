{
  const obj = {
    name: 'Moon',
  };

  obj.name; // Moon
  obj['name']; // Moon

  type Animal = {
    name: string;
    age: number;
    gender: 'Male' | 'Female';
  };

  type Name = Animal['name'];

  const text: Name = 'Hello';

  type Gender = Animal['gender'];

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'

  const key: Keys = 'age';
}
