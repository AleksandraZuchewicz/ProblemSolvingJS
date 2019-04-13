//rot13 encryption work by shifting source input by 13 characters in 26 character alphabet.
//eg "aba" will become "non"   ABCDEFGHIJKLMNOPQRSTUVWXYZ;

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let encryption = function(word) {
  let encryptetWord = [];
  for (let i = 0; i < word.length; i++) {
    let currentValue = word[i];
    let index = alphabet.indexOf(currentValue);
    if (index == -1) {
      encryptetWord.push(currentValue);
      continue;
    }
    let newIndex;
    if (index < 13) {
      newIndex = index + 13;
    } else {
      newIndex = index - 13;
    }
    encryptetWord.push(alphabet[newIndex]);
  }
  return encryptetWord;
};
let encryptedWord = encryption("AB!!BA");
let decryptedWord = encryption(encryptedWord);
console.log(encryptedWord.join(""));
console.log(decryptedWord.join(""));
