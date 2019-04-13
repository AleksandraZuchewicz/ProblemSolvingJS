let factorial = function(number) {
  if (number <= 0 || typeof number !== "number" || !Number.isInteger(number)) {
    throw new Error("Not valid input");
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
};
//console.log(factorial(70));
//console.log(factorial());
//console.log(factorial(null));
//console.log(factorial(0));
//console.log(factorial(-10));
let number = 4.5;
//console.log(factorial(number));
try {
  console.log(factorial(number));
} catch (error) {
  console.log("Could not compute factorial");
}
console.log("end of program");

//console.log(factorial(-3.99, "oooo"));
