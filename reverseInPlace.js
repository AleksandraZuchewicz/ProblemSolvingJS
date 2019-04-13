let swap = function(leftIndex, rightIndex, string) {
  let leftLetter = string[leftIndex];
  string[leftIndex] = string[rightIndex];
  string[rightIndex] = leftLetter;
  return string;
};
let reverseString = function(string) {
  string = string.split("");
  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    string = swap(i, j, string);
  }

  return string.join("");
};
console.log(reverseString("Madka"));
