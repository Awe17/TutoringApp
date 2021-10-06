/**
 *  To do 
 * 1. Modify delete by id function to use query 
 *    strings instead of route params
 * 2. Include search by author
 */


const { request } = require('express');
const book = require('../Models/bookModel');


// Create a new book 
module.exports.createBook = (req, res)=>{

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

// Find all books that meets a certain condition and
// sends a response to the server
const findWithCondition = (condition,response)=>{
    book.find(condition)
        .then((result)=>{
            if(result.length === 0){
                response.json({message: 'Sorry no book was found'});
            }else{
                response.json(result);
            }
        })
        .catch((err)=>{
            console.log(err);
            response.status(400).send('Something went wrong');
        })
} 


// Fetch all books by author, title or return all books
module.exports.getAllBooks = (req, res)=>{
    // Get title from query string
    const title = req.query.title;
    const author = req.query.author;
    const id = req.query.id;

    if(author){
        const condition =  { author: new RegExp(author, 'i') } 
        findWithCondition(condition, res);
       
    }else if(title){
        const condition =  { title: new RegExp(title, 'i') } 
        findWithCondition(condition, res);
       
    }else {
       findWithCondition({}, res);
    }
    

}

// Fetch the book by its id 
module.exports.getBookById = (req,res)=>{
    const id = req.params.id
    book.findById(id)
            .then((result)=>{
                res.json(result);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).send('Sorry something went wrong');
            })
    
}

// Delete book by id 
module.exports.deletebook = (req,res)=>{
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


// Get all available books
module.exports.getAvailableBooks = (req,res)=>{

    //const id = req.query.id;
    //const condition = id ? {isAvailable: true, _id: id} : {isAvailable: true}
    //const message = id ? "Sorry this book isn't available" : "Sorry there are no available books"


    book.find({isAvailable: true})
    .then((result)=>{

        if(result.length > 0){
            res.json(result);
        }else{
            res.json({message : "Sorry there are no available books"});
        }
        
    })
    .catch((err)=>{
        res.status(400).send('Something went wrong');
        console.log(err);
    })

}


// Update book
module.exports.updateBook =  (req,res)=>{
    const id = req.query.id;
    const isAvailable = req.query.isAvailable

    // Check if id and isAvailable were supplied
    if(!id || !isAvailable){

        res.status(400).json({error: "Invalid request, both id and isAvailable must be supplied"})
    }
    else{

        book.findByIdAndUpdate(id, {isAvailable})
        .then((result)=>{

            if(result){
                res.json({message: 'Book successfully updated'});
            }else{
                res.status(400).json({error: "Invalid id, please enter a valid id"});
            }

        })
        .catch((err)=>{
            res.status(500).json(err);
        })
    }
   
}


// Get book status
module.exports.getStatus = (req,res) =>{
    // Check if book exists
    const id = req.query.id;
    book.findById(id)
    .then((result) =>{
        if(result){
            const status = result.isAvailable ? "Book is available" : "Book has been borrowed";
            res.json({status: status});
        }
        else{
            res.status(400).json({errors: "Book wasn't found, please enter a valid id"});
        }
    })
    .catch((err) => {
        res.status(500).json({errors : 'Opps Something went wrong'});
        console.log(err);
    })
}