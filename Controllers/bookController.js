const { request } = require('express');
const book = require('../Models/bookModel');

const createBook = (req, res)=>{

    const books = req.body

    book.create(books)
    .then(()=>{
        res.send('Successfully saved');
    })
    .catch((err)=>{
        res.send('Something went wrong');
        console.log(err);
    })
    

        


}

const getAllBooks = (req, res)=>{
    book.find()
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.send('Something went wrong');
    })

}

const getBookById = (req,res)=>{
    const id = req.params.id
    book.findById(id)
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.send('Sorry something went wrong');
    })
}


module.exports= {
    createBook,
    getAllBooks,
    getBookById
}