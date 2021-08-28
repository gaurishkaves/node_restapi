const express = require('express')
const router = express.Router()
const userController = require('../components/user/user.controller')
const { validateMongoID } = require('../middleware/validateMongoID')

router.get('/', userController.getAllUser)

router.get('/:id',validateMongoID, userController.getUser)

router.post('/', userController.createUser)

router.put('/:id',validateMongoID,  userController.updateUser)

router.delete('/:id',validateMongoID, userController.deleteUser)

module.exports = router
