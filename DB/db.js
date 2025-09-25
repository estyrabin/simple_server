
let g_id = 3;
let books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
];

function getAllBooks() {
  return books;
}

function getBookById(id) {
  return books.find(b => b.id === id);
}

function addBook(title, author) {
  const book = { id: g_id++, title, author };
  books.push(book);
  return book;
}

function deleteBook(id) {
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return null;
  books.splice(idx, 1);
  return books;
}

function updateBook(id,title, author) {
  const book = getBookById(id);
  if (!book) return null;

  if(title) book.title = title;
  if(author) book.author = author;

  return book;
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteBook,
  updateBook
};
