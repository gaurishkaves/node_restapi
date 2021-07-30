var express = require('express');
var router = express.Router();
var userController = require("../components/user/user.controller")


router.get("/",userController.getAllUser);

router.get("/:id",userController.getUser);

router.post("/",userController.createUser);

router.put("/:id",userController.updateUser);

router.delete("/:id",userController.deleteUser);


module.exports = router;
