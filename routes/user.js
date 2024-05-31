const express = require("express")
const router = express.Router()
const userController =require("../controllers/userController");
const auth = require("../middleware/auth")


router.post('/register',userController.register);
router.post('/login',userController.login);

// terdapat validasi login dari middleware
router.get('/',auth,userController.get);
router.get('/:id',userController.getOne);
// router.put('/',userController.);
router.delete('/delete/:id',userController.delete);

module.exports = router;