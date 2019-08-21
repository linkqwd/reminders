// kata: https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
function encrypt(text, recursionTime) {
  if (recursionTime < 0 || !text) return text;
  if (recursionTime === 0) return text;

  const p1 = [...text].filter((element, i) => {
    if (i % 2 === 1) return element;
  });
  const p2 = [...text].filter((element, i) => {
    if (i % 2 === 0) return element;
  });

  return encrypt([...p1, ...p2].join(""), recursionTime - 1);
}

function decrypt(text, recursionTime) {
  if (recursionTime < 0 || !text) return text;
  if (recursionTime === 0) return text;

  const p1 = text.slice(0, Math.floor(text.length / 2));
  const p2 = text.slice(Math.floor(text.length / 2));

  const result = [];

  for (let i = 0; i <= p1.length; i++) {
    result.push(p2[i]);
    result.push(p1[i]);
  }

  return decrypt(result.filter(Boolean).join(""), recursionTime - 1);
}

console.log(encrypt("This is a test!", 3));
console.log(decrypt("hsi  etTi sats!", 1));
console.log(decrypt("s eT ashi tist!", 2));

// https://www.codewars.com/kata/57814d79a56c88e3e0000786/solutions/solutions
