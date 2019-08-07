function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;

  const halfDiam = [];

  for (let i = 0, j = Math.floor(n / 2); i < n; i++) {
    if (i % 2 === 0) continue;
    halfDiam.push(" ".repeat(j--) + "*".repeat(i) + "\n");
  }

  const diam = [
    ...halfDiam,
    `${"*".repeat(n) + "\n"}`,
    ...halfDiam.reverse()
  ].join("");

  return diam;
}

console.log(diamond(7));

// Solutions
// https://www.codewars.com/kata/5503013e34137eeeaa001648/solutions/javascript
