{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    public static BEANS_GRAM_PER_SHOT: number = 7; // class level
    public coffeeBeans: number = 0; // instance (object) level

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
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

      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);

      return this.milk.makeMilk(sugarAdded);
    }
  }

  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();

      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();

      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();

      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class CandySugarMix implements SugarProvider {
    private getSugar() {
      console.log('Getting some Sugar from Candy');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();

      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some Sugar from Jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();

      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  const candySugar = new CandySugarMix();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);

  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
