let numbers = [];

for (let i = 1; i < 101; i++) {
  numbers.push(i);
}

for (let index = 0; index < numbers.length; index++) {
  for (let i = 1; i < 11; i++) {
    let product = numbers[index] * i;

    console.log(`${numbers[index]} x ${i} = ${product}`);
  }
}
