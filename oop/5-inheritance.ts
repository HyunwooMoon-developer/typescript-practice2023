{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /* class CaffeLatteMachine {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CaffeLatteMachine {
      return new CaffeLatteMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('Value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning coffee machine');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CaffeLatteMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough coffee beans');
      }

      this.coffeeBeans -= shots * CaffeLatteMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);

      return { ...coffee, hasMilk: true };
    }
  } */

  class CoffeeMachine implements CoffeeMaker {
    public static BEANS_GRAM_PER_SHOT: number = 7; // class level
    public coffeeBeans: number = 0; // instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('Value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning coffee machine');
    }

    public grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    public preheat() {
      console.log('heating up...');
    }

    public extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();

      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming Milk');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'ABCD');
  console.log(latteMachine.makeCoffee(1));
}
