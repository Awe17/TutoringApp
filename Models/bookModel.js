const mongoose = require('mongoose');
const {Schema} = require('mongoose');

/**
 * To do
 * Create a property to store is available 
 */

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
    },

    isAvailable:{
        type: Boolean,
        default: true,
        required: false,
    }
},{timestamps: true})

module.exports = mongoose.model('Book',bookSchema);