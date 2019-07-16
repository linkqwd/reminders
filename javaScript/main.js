const ordinal = [
  () => setTimeout(() => console.log(1), 600),
  () => setTimeout(() => console.log(2), 200),
  () => setTimeout(() => console.log(3), 400)
];

for (let i = 0; i < ordinal.length; i++) {
  console.log(ordinal[i]);
  Promise.resolve(ordinal[i]).then(result => {
    console.log(result);
    result();
  });
}
