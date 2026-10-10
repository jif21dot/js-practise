const books = [
  { title: "The Hobbit", genre: "fantasy", pages: 310 },
  { title: "Gone Girl", genre: "crime", pages: 415 },
  { title: "SPQR", genre: "history", pages: 608 },
  { title: "Mistborn", genre: "fantasy", pages: 541 },
  { title: "The Secret History", genre: "crime", pages: 559 },
  { title: "Sapiens", genre: "history", pages: 443 },
];

const list = document.getElementById("book-list");

function renderBooks(booksToShow) {
    const html = booksToShow.map(book => `<li>${book.title} (${book.genre}, ${book.pages}) </li>`);
    list.innerHTML = html.join("");
}

renderBooks(books)

const genreFilter = document.getElementById("genre-filter");

genreFilter.addEventListener("change", () => {
    const chosen = genreFilter.value;

    if (chosen === "all") {
        renderBooks(books);
    } else {
        const filtered = books.filter(book => book.genre === chosen);
        renderBooks(filtered);
    };
});