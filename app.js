const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app
    .set('view engine', 'ejs')
    .use(express.urlencoded({ extended: true }))

const routes = require('./src/routes/_index');
app.use('/books', routes.Books);

module.exports = app;