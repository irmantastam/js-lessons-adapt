const dog = {
  name: 'Lokis',
  color: 'brown',
  bark: 'au',
  barks: ['au', 'hrr', 'auuu', 'woof'],
  barkSingle() {
    console.log(this.name, this.bark);
  },
  barkMultiple() {
    console.log(this.name, "barks multiple times:")
    this.barks.forEach((value) => {
      console.log(this.name, value);
    });
  },
};

dog.barkSingle();
dog.barkMultiple();
