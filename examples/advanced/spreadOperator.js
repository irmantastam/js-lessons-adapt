const person1 = {
  name: 'Irmantas',
  car: 'Audi TT',
  city: 'Juragiai',
};

const person2 = {
  name: 'Indre',
  car: 'VW Jetta',
  eyeColor: 'brown',
  city: 'Piliuona',
};

const mergedPersons = {
  ...person1,
  ...person2,
};

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const merge = ( ...objects ) => (
  [...objects]
);

console.log(merge(obj1, obj2));