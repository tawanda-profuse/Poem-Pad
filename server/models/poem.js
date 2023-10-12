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
    }   
}, {timestamps: true});

const Poem = mongoose.model('Poem', poemSchema);
module.exports = Poem;