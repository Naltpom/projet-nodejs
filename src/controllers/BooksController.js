const { body, validationResult } = require('express-validator');
const model = require('../models/_index');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');




exports.form = async (req, res, next) => {
    const _id = req.params._id
    const book = await model.Books.findOne({_id: _id})

    res.render('books-update', {book: book, title: (null !== book) ? `Modifier le livre ${book.title}` : 'Ajouter un livre', moment: moment})
};


exports.post = async (req, res, next) => {
    console.log('post')
    console.log(req.file)
    const _id = req.params._id
    const img = (req.file !== undefined) ? req.file.path.replace('public', '') : null
    let params = {...req.body}
    if (null !== img) {
        params = {...params, image: img}
    }

    const book = await model.Books.findOneAndUpdate({_id: _id}, params)
        .then(i => {
            return i ? i : (new model.Books({ ...req.body, slug: uuidv4()})).save()
        })
        .catch(e => console.log('e', e))
    res.redirect('/books')
};









exports.getAll = async (req, res, next) => {
    console.log('getAll')
    const books = await model.Books.find()
    res.render('books', {books: books, title: 'Liste des livres', moment: moment})
};

exports.getOne = (req, res, next) => {
    res.render('book', {books: books, title: 'Livre XX', moment: moment})
};

exports.patch = (req, res, next) => {
    res.render('book')
};

exports.delete = async (req, res, next) => {
    const book = await model.Books.findOneAndDelete({_id: req.params._id}).then(e => console.log(e)).catch(e => console.log(e))
    res.redirect('/books')
};