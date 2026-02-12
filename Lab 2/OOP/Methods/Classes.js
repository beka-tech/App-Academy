class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}
const myBook = new Book("The Hobbit", "Middle-earth", "J.R.R. Tolkien");

console.log(myBook);
