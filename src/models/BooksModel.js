const mongoose = require('mongoose');

const Books = mongoose.model(
    'Books',
    mongoose.Schema({
        title: { type : String, required: true},
        author: { type : String, required: true},
        date_published: { type : Date, required: true},
        slug: { type : String, unique: true},
        created_at: { type : Date, },
        update_at: { type : Date, },
    })
);

module.exports =  Books;