let alphabet = "ABCD".split("");
let encrypted = function(word) {
  let encryptedWord = [];
  for (let i = 0; i < word.length; i++) {
    let choosenCharacter = word[i];
    let index = word.indexOf(choosenCharacter);
    if (alphabet.includes(choosenCharacter)) {
      let indexOfEncryptedCharacter = (index + 2) % alphabet.length;

      let encryptedLetter = alphabet[indexOfEncryptedCharacter];
      encryptedWord.push(encryptedLetter);
    } else {
      encryptedWord.push(choosenCharacter);
    }
  }
  return encryptedWord.join("");
};
console.log(encrypted("ADCA! @  AA"));
console.log(encrypted(encrypted("ADCA! @  AA")));
