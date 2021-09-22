const express = require('express');
const app = express();
app.use(express.static('public'));
console.log(__dirname+'/public')
app
    .set('view engine', 'ejs')
    .use(express.urlencoded({ extended: true }))

const routes = require('./src/routes/_index');
app.use('/books', routes.Books);

module.exports = app;