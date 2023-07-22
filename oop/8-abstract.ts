{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    public static BEANS_GRAM_PER_SHOT: number = 7; // class level
    public coffeeBeans: number = 0; // instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, 'abcd'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('---------------');
    machine.makeCoffee(1);
  });
}
