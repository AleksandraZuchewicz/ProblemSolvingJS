let generateSortedArray = function(lenght, searchedNumber) {
  let array = [];
  for (let i = 0; i < lenght; i++) {
    let number = Math.floor((Math.random() * 2 - 1) * 1000);
    array.push(number);
  }
  let arrayWithSearchedNumber = array.concat([searchedNumber]);
  return arrayWithSearchedNumber.sort((a, b) => {
    return b - a;
  });
};

let binarySearch = function(array, number) {
  if (array.length === 1) {
    if (array[0] === number) {
      return true;
    } else {
      return false;
    }
  }
  let halfIndex = Math.floor(array.length / 2);
  let halfNumber = array[halfIndex];
  let nextSubArray;
  if (halfNumber > number) {
    nextSubArray = array.slice(halfIndex, array.length);
  } else if (halfNumber < number) {
    nextSubArray = array.slice(0, halfIndex);
  } else {
    return true;
  }
  return binarySearch(nextSubArray, number);
};

let array1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
console.log(binarySearch(array1, 11));

let sortedArray = generateSortedArray(100, 13);
console.log(binarySearch(sortedArray, 13));
