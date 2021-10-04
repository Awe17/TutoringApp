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
router.get('/available', (req,res)=>{
    //to be contd
})

// Add a new book
router.post('/', bookController.createBook)

// Get book by id
router.get('/:id', bookController.getBookById)

// Delete book by id
router.delete('/', bookController.deletebook)

module.exports = router;