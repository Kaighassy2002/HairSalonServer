 const express = require('express')
const userController = require('../Controller/userController')
const bookingController = require('../Controller/bookingController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
 
const router = new express.Router()

 // register
 router.post('/register',userController.register)

// login
router.post('/login',userController.login)

 module.exports = router

 //booking
 router.post('/booking',jwtMiddleware,bookingController.bookingdetails)

 //get user booking
 router.get('/userbooking',jwtMiddleware,bookingController.getUserbooking)
