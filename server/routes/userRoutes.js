const express = require('express')
const { getAllUsers } = require('../controllers/userController')
const router = express.router()

router.get('/', getAllUsers)

module.exports = router; 