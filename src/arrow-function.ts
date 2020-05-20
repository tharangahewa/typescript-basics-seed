const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizzas1 = pizzas.map(function (pizza) {
  return pizza.name.toUpperCase();
});

const mappedPizzas2 = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas1);
console.log(mappedPizzas2);

const pizza1 = {
  name: "Seafood Pizza",
  getName: function () {
    console.log(this);
  },
};

const pizza2 = {
  name: "Seafood Pizza",
  getName: function () {
    const self = this;
    setTimeout(function () {
      console.log(self);
    }, 100);
  },
};

//workaround the new scope creation by using an arrow function, because it doesn't create new scope
const pizza3 = {
  name: "Seafood Pizza",
  getName: function () {
    setTimeout(() => {
      console.log(this);
    }, 100);
  },
};

pizza1.getName();
pizza2.getName();
pizza3.getName();