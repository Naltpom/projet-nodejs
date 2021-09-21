const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/BooksController');

router.get('/', BooksController.getAll);
router.use('/new', BooksController.form);
router.use('/update/:id', BooksController.form);
router.post('/', BooksController.post);
router.get('/:id', BooksController.getOne);
router.get('/delete/:id', BooksController.delete);


module.exports = router;