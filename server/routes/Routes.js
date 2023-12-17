const express = require('express')
const router = express.Router()
const { signupController , loginController } =require('../Controllers/UserController')
router.post('/signup',signupController)
router.post('/login',loginController)


module.exports = router