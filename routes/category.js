const express = require("express")
const router = express.Router()

const CategoryController =require("../controllers/categoryController");


// router.post('/',FilmController.create);
router.get('/',CategoryController.get);
router.get('/:id',CategoryController.getOne);

module.exports = router;