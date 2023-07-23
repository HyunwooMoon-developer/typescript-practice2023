{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time');
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time');
    }

    workPartTime() {}
  }

  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  const pay = <T extends Employee>(employee: T): T => {
    employee.pay();
    return employee;
  };

  const moon = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  const obj = {
    name: 'Moon',
    age: 33,
  };

  const obj2 = {
    animal: 'dog',
  };

  const getValue = <T, U extends keyof T>(obj: T, key: U): T[U] => {
    return obj[key];
  };

  console.log(getValue(obj, 'name'));
  //console.log(getValue(obj2, 'name'));
}
