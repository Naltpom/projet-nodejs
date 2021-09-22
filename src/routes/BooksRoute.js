const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/BooksController');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const storage = multer.diskStorage({
    destination: (req, res, cb) => { cb(null, './public/uploads') },
    filename: (req, file, cb) => { console.log(file); cb(null, uuidv4() + file.originalname.substr(file.originalname.lastIndexOf('.'))) }
})
const upload = multer({ storage: storage })


router.get('/', BooksController.getAll);

router.get('/create', BooksController.form);
router.post('/create', upload.single('image'), BooksController.post);

router.post('/', BooksController.post);
router.get('/:_id', BooksController.getOne);

router.get('/update/:_id', BooksController.form);
router.post('/update/:_id', upload.single('image'), BooksController.post);

router.get('/delete/:_id', BooksController.delete);


module.exports = router;