const x = {};

const y = {};

console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
  /* 
  this.makeCoffee = (shots) => {
    console.log(`Making ${shots} shots`);
  }; */
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log(`Making ${shots} shots`);
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log('machine1', machine1);
console.log('machine2', machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latetMachine = new LatteMachine(1);
console.log(latetMachine);

latetMachine.makeCoffee();
