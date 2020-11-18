//-----------------------------------
"use strict";
//-----------------------------------

function Book(name, genre, pages, isbnNr) {
  this.name = name;
  this.genre = genre;
  this.pages = pages;
  this.isbnNr = isbnNr;

  this.getBookInfo = function () {
    return console.log(
      "Book: " +
        this.name +
        "\nTopic: " +
        this.genre +
        "\nPages: " +
        this.pages +
        "\nISBN: " +
        this.isbnNr +
        "\n-----"
    );
  };
}

let books = [];

books.push(
  new Book("JavaScript and JQuery", "Programmering", 640, "9781118531648")
);
books.push(new Book("HTML and CSS", "Programmering", 512, "9781118008188"));
books.push(new Book("PHP & MySQL", "Programmering", 672, "9781119149217"));

let nrOfBooks = prompt("How many books to add?", "1,2,3...");

for (let i = 1; i <= nrOfBooks; i++) {
  let addBook = prompt("Adding book #" + i + "'s book title: ");
  let addGenre = prompt("Adding book #" + i + "'s genre: ");
  let addPages = prompt("Adding book #" + i + "'s page total: ", "1,2,3...");
  let addIsbn = prompt("Adding book #" + i + "'s ISBN Number: ");
  books.push(new Book(addBook, addGenre, addPages, addIsbn));
}

books.forEach(function (e) {
  e.getBookInfo();
});

/* 
Ingen validering finns för att kontrollera 
att användar-inputen är rätt angiven, 
men det finns heller inget angivet krav på detta i uppgiften. 
*/
