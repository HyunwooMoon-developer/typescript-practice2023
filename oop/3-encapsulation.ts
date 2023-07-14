{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public, private, protected
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('Value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(20);
  maker.fillCoffeeBeans(35);
  ///maker.coffeeBeans = - 34 // invalid

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Hyunwoo', 'Moon');
  user.age = 6;
  console.log(user, user.fullName);
  //user.firstName = 'Hyun';
  //console.log(user.fullName);
}
