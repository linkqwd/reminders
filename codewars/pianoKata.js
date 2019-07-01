const settings = {
  keys: 88,
  boxesCount: 7,
  boxPattern: [
    "white",
    "black",
    "white",
    "black",
    "white",
    "white",
    "black",
    "white",
    "black",
    "white",
    "black",
    "white"
  ]
};

const board = ["white", "black", "white", "white"];

for (let i = 0; i < settings.boxesCount; i++) {
  board.splice(3, 0, ...settings.boxPattern);
}

function blackOrWhiteKey(keyPressCount) {
  if (keyPressCount % settings.keys === 0) {
    return board[keyPressCount % settings.keys];
  } else {
    return board[(keyPressCount % settings.keys) - 1];
  }
}

blackOrWhiteKey(1); // "white")
blackOrWhiteKey(5); // "black")
blackOrWhiteKey(12); // "black")
blackOrWhiteKey(42); // "white")
blackOrWhiteKey(88); // "white")
blackOrWhiteKey(89); // "white")
blackOrWhiteKey(92); // "white")
blackOrWhiteKey(100); // "black")
blackOrWhiteKey(111); // "white")
blackOrWhiteKey(200); // "black")
blackOrWhiteKey(2017); // "white")

// kata https://www.codewars.com/kata/589273272fab865136000108/train/javascript
