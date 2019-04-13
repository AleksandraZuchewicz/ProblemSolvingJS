let exampleString = "Ala ma kota!";

let reverseFunction = function(string) {
  let stringArray = string.split("");
  let reversedString = [];
  for (let i = 0; i < string.length; i++) {
    let popedCharacted = stringArray.pop();
    reversedString.push(popedCharacted);
  }
  return reversedString.join("");
};
console.log(reverseFunction(exampleString));
