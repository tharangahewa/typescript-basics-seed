const pizza4 = {
  name: "Pepperoni",
  price: 15,
  getName: function () {
    return this.name;
  },
};

// Real property like functions, getting rid of the function keyword
const pizza5 = {
  name: "Pepperoni",
  price: 15,
  getName() {
    return this.name;
  },
};

const toppings2 = ["Pepperoni", "Cheese"];

function createOrder(pizza: any, toppings: any) {
  return { pizza, toppings };
}

console.log(createOrder(pizza4, toppings2));
console.log(pizza4.getName());
console.log(pizza5.getName());
