let counter = 0;
let isRotation = function(string, checkedString) {
  let arrayString = string.split("");

  let result = [];
  let firstLetter = arrayString[0];
  for (let i = 1; i < arrayString.length; i++) {
    result.push(arrayString[i]);
  }
  result = result.join("") + firstLetter;
  if (result === checkedString) {
    counter = 0;
    return true;
  } else {
    if (counter !== string.length) {
      counter++;
      return isRotation(result, checkedString);
    } else {
      counter = 0;
      return false;
    }
  }
};
console.log(isRotation("olao", "aool"));
