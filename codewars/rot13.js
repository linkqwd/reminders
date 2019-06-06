function rot13(message) {
  const string = message.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabet13 = alphabet.slice(13) + alphabet.slice(0, 13);

  return string
    .map(letter => {
      if (alphabet.includes(letter)) {
        return alphabet13[alphabet.indexOf(letter)];
      } else if (
        letter === letter.toUpperCase() &&
        alphabet.includes(letter.toLowerCase())
      ) {
        return alphabet13[alphabet.indexOf(letter.toLowerCase())].toUpperCase();
      } else {
        return letter;
      }
    })
    .join("");
}

console.log(
  rot13("1Lorem ipsum dolor sit amet, consectetur adipisicing elit.")
);

// solutions
// https://www.codewars.com/kata/530e15517bc88ac656000716/solutions/javascript
