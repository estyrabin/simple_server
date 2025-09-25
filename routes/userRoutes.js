const express = require('express');
const db = require('../DB/db');
const router = express.Router();

router.get('/books', (req, res) => {
  res.json(db.getAllBooks());
});

router.get('/books/:id', (req, res) => {
  const book = db.getBookById(Number(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

router.post('/books', (req, res) => {
  const { title, author } = req.body || {};
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author required' });
  }
  const newBook = db.addBook(title, author);
  res.status(201).json(newBook);
});

router.delete('/books/:id', (req, res) => {
  const removed = db.deleteBook(Number(req.params.id));
  if (!removed) return res.status(404).json({ error: 'Book not found' });
  res.json(removed);
});


router.patch('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const { title, author } = req.body || {};
  
  if (!title && !author) {
    return res.status(400).json({ error: 'title or author required' });
  }

  const newBook = db.updateBook(id, title, author);
  if (!newBook) return res.status(404).json({ error: 'Book not found' });

  res.status(200).json(newBook);
});


module.exports = router;
