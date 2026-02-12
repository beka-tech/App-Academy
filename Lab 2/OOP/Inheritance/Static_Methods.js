class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }

  getInformation() {
    return `${this.title} by ${this.author}`;
  }

  static getTitles(...books) {
    return books.map((book) => book.title);
  }
}

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

const theTwoTowers = new Book(
  "The Two Towers",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles.join(", "));
