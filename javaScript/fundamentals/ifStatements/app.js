// TERNARY OPERATOR
console.log(101 === 100 ? 'CORRECT' : 'INCORRECT');
let varOne = 1 === '1' ? "aa" : (24 == 24) ? "gper" : "rooust";
console.log(varOne)

// WITHOUT BRACES
if(100 === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if (1 !== 1) console.log('impossible')

// Вернуть либо то, либо это
console.log(( false || "нет сотрудников" ))

// использовать значение по умолчанию только если width === undefined
function showWarning(width, height, title, contents) {
  if (width === undefined) width = 200;
  if (height === undefined) height = 100;
  if (title === undefined) title = "Предупреждение";
}

// Работает в тех ситуациях, когда «нормальное» значение параметра в логическом контексте отлично от false
function showWarning(width, height, title, contents) {
  width = width || 200; // если не указана width, то width = 200
  height = height || 100; // если нет height, то height = 100
  title = title || "Предупреждение";
}