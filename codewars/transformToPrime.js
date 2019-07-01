function minimumNumber(numbers) {
  let n = 0, // n = numbers.reduce((a,b) => a+b);
    counter = 0;

  for (let val of numbers) {
    n += val;
  }

  while (!isPrime(n)) {
    counter++;
    n++;
  }

  return counter;
}

function isPrime(n) {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(minimumNumber([2, 12, 8, 4, 6]));

// kata: https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript
// Solutions:
