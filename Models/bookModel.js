const mongoose = require('mongoose');
const {Schema} = require('mongoose');

// Create book schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    
    author: {
        type: String,
        required: true,
    },
    
    pages: {
        type: Number,
        required: true,
    },

    publisher:{
        type: String,
        required: false
    }
},{timestamps: true})

module.exports = mongoose.model('Book',bookSchema);