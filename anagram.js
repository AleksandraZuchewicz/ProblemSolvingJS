let isAnagram = function(word1, word2) {
  let ArrayWord1 = word1.split("");
  let ArrayWord2 = word2.split("");
  if (ArrayWord1.length != ArrayWord2.length) {
    return false;
  }
  let sortedArrayWord1 = ArrayWord1.sort();
  let sortedArrayWord2 = ArrayWord2.sort();

  if (sortedArrayWord1.join("") == sortedArrayWord2.join("")) {
    return true;
  } else {
    return false;
  }
};
console.log(isAnagram("word", "word"));
console.log(isAnagram("mama", "word"));
