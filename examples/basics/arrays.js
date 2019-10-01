var numberList = [];
numberList = [1, 2, 3, 4, 5];

console.log('number list array initial', numberList);
console.log('number list array 2nd element', numberList[1]) // 2.
console.log('number list array length', numberList.length);

numberList.push(6) // Adds element to array.
console.log('number list array with added one more (6) element', numberList) // [1, 2, 3, 4, 5, 6].

numberList.pop() // Removes last item from array.
console.log('number list array with removed last item', numberList) // [1, 2, 3, 4, 5].