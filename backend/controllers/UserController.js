const UserModel = require("../models/UserModel")
const {body, validationResult } = require("express-validator")
const Validator = require("../validators/Validator")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const createToken = (id) =>{
    return jwt.sign({id},'key_word',{expiresIn:"1h"} )
}

exports.insert =[
    Validator.insert,
   async (req, res) =>{
        const pass = await bcrypt.hash(req.body.password,10)
        const error = validationResult(req)

        if(error.isEmpty()){
            const User = new UserModel({
                username:req.body.username,
                email: req.body.email,
                password: pass
            })
            User.save()
            .then((savedUser)=>{
                res.send(savedUser)
            })
            .catch((err)=>{
                res.send(err)
            })

        }
        else{
            res.send(error)
        }
    }
]

// ---------------------------------------------------->

exports.login = [
    async (req, res) => {
        try {
            const { email, password } = req.body;

            // Find the user in the database
            const user = await UserModel.findOne({ email });
            
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res. json({ success: false, message: 'Invalid email or password' });
            }

            // Generate a token
            const token = createToken(user._id);
            res.json({ token:token });

        } catch (err) {
            console.error(err)
            res.json({ success: false, message: 'An error occurred. Please try again later.' })
        }
    }
];

// ------------------------------------------------->

exports.list = [(req, res) => {
    UserModel.find()  
    UserModel.find().populate("address")
        .then((users) => {
            res.send(users)
        })
        .catch((err) => {
            res.send(err)
        })

}]

// --------------------------------------------------------------------->

exports.listpage = [(req, res)=>{
    let page = paraseInt(req.query.page) || 1;
    const perPage = 2;
    const skip = page > 1 ? (page - 1) * perPage : 0;
    const limit =perPage;
    UserModel,find().skip(skip).limit(limit)
    .then((users)=>{
        res.send(users)
    })
}]

// ------------------------------------------------------------------>

exports.delete = [(req, res) => {
    UserModel.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })

}]
