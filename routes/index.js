
const express = require("express")
const router = express.Router();
const film = require("./film")
const user = require("./user")
// const category = require("./category")

router.use('/film', film) 
router.use('/user', user) 
// router.use('/category', category) 

module.exports = router