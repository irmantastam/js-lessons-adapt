// Book constructor.
function Book(author, title, year) {
  this.author = author;
  this.title = title;
  this.year = year;
}

Book.prototype.getDescription = function() {
  return `Book ${this.title} was written by ${this.author} in ${this.year}`;
}

// magazine constructor
function Magazine(author, title, year, month) {
  // Calling a book object providing current this value.
  Book.call(this, author, title, year,);

  this.month = month;
}

// Inherit book prototype.
Magazine.prototype = Object.create(Book.prototype);

// use Magazine constructor.
Magazine.prototype.constuctor = Magazine;

const mag1 = new Magazine('Mag one', 'John Lil', '2019', 'Dec');

console.log(mag1.getDescription());