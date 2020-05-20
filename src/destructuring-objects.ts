const pizza6 = {
    id: "123",
  name: "Pepperoni",
  toppings: ["Pepperoni", "Bacon"],
};

function order({ name: pizzaName, toppings: pizzaToppings} ){
    return {pizzaName, pizzaToppings};
}

console.log( order(pizza6));