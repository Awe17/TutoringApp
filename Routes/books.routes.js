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
router.get('/', bookController.getAllBooks)

// Get all available books
router.get('/available',bookController.getAvailableBooks)

// Get a book's status
router.get('/status', bookController.getStatus);

// Add a new book
router.post('/', bookController.createBook)

// Get book by id
router.get('/:id', bookController.getBookById)

//Update available books
router.patch('/',bookController.updateBook);

// Delete book by id
router.delete('/', bookController.deletebook)

module.exports = router;