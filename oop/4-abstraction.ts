{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
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

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not Enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
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

      return this.extract(shots);
    }
  }

  const maker = CoffeeMachine.makeMachine(20);
  maker.fillCoffeeBeans(32);

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker.makeCoffee(2);
  maker.fillCoffeeBeans(30);
  maker.clean();

  class AmateureUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(20);
      this.machine.clean();
    }
  }

  const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateureUser(maker3);
  const pro = new ProBarista(maker3);
}
