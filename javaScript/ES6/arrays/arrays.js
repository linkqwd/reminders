const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
let ages = [1, 26, 51, 34, 79]

// === Array.from() ===
// transforms Node list into array
let boxesArray = Array.from(boxes); 
// Alternative, is using destructuring:
// let boxesArray = [h, ...boxes];
let boxesFiltered = boxesArray.filter(el => !el.className.includes('blue'));

boxesFiltered.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// === for of ===
for (const cur of boxesArray) {
    if (cur.className.includes('blue')) continue;
    cur.textContent = 'I changed to blue!';
}

// === findIndex ===
console.log(ages.findIndex(cur => cur > 28));

// === find ===
console.log(ages.find(cur => cur > 18));

// === ... ===
// Decomposition of arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);
