function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello : ${privateVar}`);
  }
  return inner;
  inner();
}

outer()(); // same as value() below

const value = outer();
console.log(value);
value();
