const model = require('../models/_index');

exports.post = async (req, res, next) => {
    const books = await model.Books.find()
    console.log(books)
    res.render('books', {books: books, title: 'Liste des livres'})
};

exports.form = async (req, res, next) => {
    const body = req.body
    const book = new model.Books(body)
    book.save()
        .then((application) => res.status(200).json({message : 'Application modifié', application: application}))
        .catch(error => res.status(400).json({ error }))
    console.log(req.method)
    if (req.method === 'POST') {
        res.render('book', {book: book, title: 'Formulaire livres'})
    }
    res.render('books-update', {book: book, title: 'Formulaire livres'})
};

exports.getAll = async (req, res, next) => {
    const books = await model.Books.find()
    console.log(books)
    res.render('books', {books: books, title: 'Liste des livres'})
};

exports.getOne = (req, res, next) => {
    res.render('book', {books: books, title: 'Livre XX'})
};

exports.patch = (req, res, next) => {
    res.render('book')
};

exports.delete = (req, res, next) => {
    res.render('books')
};