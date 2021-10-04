/**
 * Require express and setup express app
 * Connect to database
 */

const express = require('express');
const ConnectDB = require('./db');
const bookRouter = require('./Routes/books.routes');

require('dotenv').config(); //Comment this out when dotenv is installed
const {PORT} = process.env

// Initialise express app
const app = express();

// Connect to db
ConnectDB();

// Initialise express middleware
app.use(express.json({extended: false}));
app.use('/api/books',bookRouter); //book router

// Test get router
app.get('/new',(req,res)=>{
    
})

//setup Port
const port = process.env.PORT || PORT;

// Listen for requests 
app.listen(port,()=>{
    console.log(`Listening for requests on port ${port}...`);
})