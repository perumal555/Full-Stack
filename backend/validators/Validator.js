const  UserModel = require('../models/UserModel')
const {body} = require("express-validator")

exports.insert = [
    body("username").trim().isLength().withMessage("username cannot be empty"),
    body("email").trim().isEmail().withMessage("give a proper email address "),
    body("username").trim().custom((value) => {
        return UserModel.findOne({ username: value })
            .then((user) => {
                if (user!= null) {
                    return Promise.reject("username already exists")
                }
            })
    })
]