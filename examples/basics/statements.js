if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is not greater than y");
}


switch (vegetableType) {
  case 'Cucumber':
    console.log('Cucumbers are $0.59 a pound.');
    break;
  case 'Spinach':
    console.log('Spinachs are $0.32 a pound.');
    break;
  case 'Tomato':
    console.log('Tomatoes are $0.48 a pound.');
    break;
  case 'Cabbage':
    console.log('Cabbages are $3.00 a pound.');
    break;
  case 'Salad':
    console.log('Salad are $0.56 a pound.');
    break;
  case 'Paprika':
    console.log('Paprikas are $2.79 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + vegetableType + '.');
}