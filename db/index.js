/**
 * To do
 * 1. Store DBURI in the .env file
 * 2. Require dotenv and cofigure dotenv
 * 
 */

require('dotenv').config();
const mongoose = require('mongoose');
const {DBURI} = process.env;

// Mongodb will throw an error without these
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


// Create a connection function
const ConnectDB = () => {
    mongoose.connect(DBURI,dbOptions)
        .then(()=>{
            console.log('Sucessfully connected to db...');
        })
        .catch((err)=>{
            console.log(err);
            process.exit(1);
        })
}

// Export the ConnectDB function
module.exports = ConnectDB;
