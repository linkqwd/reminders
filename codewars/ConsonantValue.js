function solve(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const nFromStr = [...s].map(l =>
    vowels.includes(l) ? null : alphabet.indexOf(l) + 1
  );

  let temp = 0;
  let biggest = 0;

  for (let i = 0; i <= nFromStr.length; i++) {
    let currentN = nFromStr[i];

    if (typeof currentN === "number") {
      temp += currentN;
    } else {
      biggest = temp > biggest ? temp : biggest;
      temp = 0;
    }
  }

  return biggest;
}

solve(
  "hhrtsakrgoprkjashjoraisgjnaoirthnjaiorajpohjtnaoginjaogitjahaophjtajorsp"
);

// solutions: https://www.codewars.com/kata/59c633e7dcc4053512000073/solutions/javascript
