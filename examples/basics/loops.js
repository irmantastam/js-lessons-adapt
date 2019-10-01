// Define an array.
const catList = ['Meow', 'Siuzi', 'Tracy', 'Kitty', 'Softy'];

console.log('cat list array', catList);

// For loop through our catList array.
for (var i = 0; i < catList.length; i++) {
  console.log(`cat number ${i}`, catList[i]);
}

// Define circle object.
const circle = {
  radius: 50,
  color: 'red',
  position: {
    x: 1,
    y: 2,
  },
}

console.log('Circle object', circle);

// for .. in loop through our object having a unique key in each iteration.
for (let key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}