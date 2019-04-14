let merge = function(letter, subStringPerm) {
  for (let i = 0; i < subStringPerm.length; i++) {
    subStringPerm[i] = letter + subStringPerm[i];
  }
  return subStringPerm;
};

let stringPermutation = function(string) {
  if (string.length === 1) {
    return [string];
  }
  let permutations = [];
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    let subString = string
      .slice(0, i)
      .concat(string.slice(i + 1, string.length));
    let subStringPerm = stringPermutation(subString);

    permutations = permutations.concat(merge(letter, subStringPerm));
  }

  return permutations;
};
console.log(stringPermutation("olo"));
