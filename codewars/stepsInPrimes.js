function step(g, m, n) {
  arr = [];
  for (let i = m; i < n; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      arr = [i, i + g];
      break;
    }
  }

  return arr.length ? arr : null;
}

function isPrime(n) {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(step(2, 100, 110));
console.log(step(4, 100, 110));
console.log(step(6, 100, 110));
console.log(step(8, 300, 400));
console.log(step(10, 300, 400));
console.log(step(4, 100, 30113));
console.log(step(6, 100, 30097));
console.log(step(8, 30097, 30097));

// solutions
// https://www.codewars.com/kata/5613d06cee1e7da6d5000055/solutions/javascript
