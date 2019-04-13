let fibonaczi = function(number) {
  result = [];
  if (number > 0) {
    result.push(0);
  }
  if (number > 1) {
    result.push(1);
  }
  for (let i = 3; i <= number; i++) {
    result.push(result[i - 2] + result[i - 3]);
  }
  return result;
};
console.log(fibonaczi(100));
