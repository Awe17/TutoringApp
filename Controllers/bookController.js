/**
 *  To do 
 * 1. Modify delete by id function to use query 
 *    strings instead of route params
 * 2. Include search by author
 */


const { request } = require('express');
const book = require('../Models/bookModel');

const createBook = (req, res)=>{

    const books = req.body

    book.create(books)
    .then(()=>{
        res.send('Successfully saved');
    })
    .catch((err)=>{
        res.status(400).send('Something went wrong');
        console.log(err);
    })
}

const getAllBooks = (req, res)=>{
    // Get title from query string
    const title = req.query.title;
    const id = req.query.id;

    if(id&&title){

        res.status(400).json({errors:'Invalid request, please supply either title or id but not both'})

    }else if(id){
        book.findById(id)
            .then((result)=>{
                res.json(result);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).send('Sorry something went wrong');
            })
    }else if(title){
        const condition =  { title: new RegExp(title, 'i') } 
        book.find(condition)
            .then((result)=>{
                res.json(result);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).send('Something went wrong');
            })
    }else {
        book.find()
        .then((result)=>{
            res.json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).send('Something went wrong');
        })
    }
    

}

const getBookById = (req,res)=>{
    const id = req.params.id
    
}

const deletebook = (req,res)=>{
    const id = req.query.id;
    if(!id){
        res.status(400).json({error:'Invalid request, an id is required'})
    }
    else{
        book.findByIdAndDelete(id)
            .then(()=>{
                res.json({message: `Book was successfully deleted`})
            })
            .catch((err)=>{
                res.status(400).send('Something went wrong');
                console.log(err);
            })
    }
    
}


module.exports= {
    createBook,
    getAllBooks,
    getBookById,
    deletebook
}