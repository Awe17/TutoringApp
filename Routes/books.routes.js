/**
 *  Routes
 *  @get Get all books in the db
 *  @post Create a new book
 *  @get Find a book by its id
 *  @get Find a book by its title
 *  @delete Delete a book by its title
 */
const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');


// Get all books
router.get('/api/books', bookController.getAllBooks)

// Add a new book
router.post('/api/books', bookController.createBook)

// Get book by id
router.get('/api/books/:id', bookController.getBookById)

// Get book by title
router.get('/api/books/?title',(req,res)=>{

})

// Delete book by id
router.delete('/api/books/:id',(req, res)=>{

})

module.exports = router;