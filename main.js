function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;

  const part1 = [];
  const part2 = [];

  for (let i = 0, j = Math.floor(n / 2); i < n; i++) {
    if (i % 2 === 0) continue;
    const string = " ".repeat(j--) + "*".repeat(i) + "\n";

    part1.push(string);
    part2.push(string);
  }

  part1.push("*".repeat(n) + "\n");

  return [...part1, ...part2.reverse()].join("");
}

console.log(diamond(5));

// Solutions
// https://www.codewars.com/kata/5503013e34137eeeaa001648/solutions/javascript
