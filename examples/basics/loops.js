const catList = ['Meow', 'Siuzi', 'Tracy', 'Kitty', 'Softy'];

// For loop. Iterates over our catList array.
for (let i = 0; i < catList.length; i++) {
  console.log(catList[i]); // Logs: 'Meow', 'Siuzi', 'Tracy', 'Kitty', 'Softy'.
}

// for .. in loop. Iterates through object providing key in each iteration.
for (let key in catList) {
  console.log(key); // Logs: 0, 1, 2, 3, 4.
}

// for .. of loop. Iterates through iterable object (Array) providing current value in each iteration.
for (let value of catList) {
  console.log(value); // Logs: 'Meow', 'Siuzi', 'Tracy', 'Kitty', 'Softy'.
}

let counter = 0

// While loop. Executes as long as specified condition evaluates to be true.
while (counter < 5) {
  counter++;
  console.log(counter);
}
