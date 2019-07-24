const expandedForm = n => {
  return `${n}`
    .split("")
    .map((n, i, arr) => (+n ? n + "0".repeat(arr.length - i - 1) : null))
    .filter(n => !!n)
    .join(" + ");
};

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));

// kata: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// solutions: https://www.codewars.com/kata/5842df8ccbd22792a4000245/solutions/javascript
