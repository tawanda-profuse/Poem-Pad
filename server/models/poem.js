const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const poemSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    }  
}, {timestamps: true});

const Poem = mongoose.model('Poem', poemSchema);
module.exports = Poem;