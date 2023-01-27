const express = require('express')
const router = express.Router()
const User = require('../models/user')
const getAllUsers=require('../controllers/getAllUser')
const getUser=require('../controllers/getUser')
const addUser=require('../controllers/addUser')
const updateByUserId=require('../controllers/updateById')
const updateUser=require('../controllers/updateUser')
const deleteUser=require('../controllers/deleteUser')
router.get('/', getAllUsers)

router.get('/:id', getUser)


router.post('/', addUser)

router.patch('/:id', updateByUserId)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router