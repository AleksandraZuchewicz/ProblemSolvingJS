//use bubble sort
let swap = function(i, j) {
  let iElement = this[i];
  this[i] = this[j];
  this[j] = iElement;
};
let bubleSort = function(numbers) {
  numbers.swap = swap;
  let swapCounter;
  do {
    swapCounter = 0;
    for (let i = 0, j = 1; j < numbers.length; i++, j++) {
      if (numbers[i] >= numbers[j]) {
        continue;
      }
      if (numbers[j] > numbers[i]) {
        numbers.swap(i, j);
        swapCounter++;
      }
    }
    console.log(numbers);
  } while (swapCounter > 0);

  return numbers;
};
console.log(bubleSort([12, 40, 30, 55, 3, 7, 60, 6]));
