function sumAll1(message: string, arr: number[]) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

console.log(sumAll1("Sum is:", [1, 2, 3, 4, 5]));

function sumAll2(message: string, ...arr: number[]) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

console.log(sumAll2("Sum is:", 1, 2, 3, 4, 5));