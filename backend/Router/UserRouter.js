const express = require("express")
const router = express.Router()

const UserController = require("../controllers/UserController")

router.post("/user/insert", UserController.insert)
router.post("/user/login", UserController.login)

module.exports = router 