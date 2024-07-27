const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken")

const jwtsecret = "mynameismahnooryasintanolifromharipurkpk"

router.post("/createruser",
    body("email", "Invalid email").isEmail(),
    body("name").isLength({ min: 4 }),
    body("password", "Invalid Password").isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), success: false });
        }

        const salt = await bcrypt.genSalt(10);
        let securepassword = await bcrypt.hash(req.body.password,salt)

        try {
            const user = await User.create({
                name: req.body.name,
                password: securepassword,
                email: req.body.email,
                location: req.body.location
            });

            res.json({ success: true, user });

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
);


router.post("/loginuser",
    body("email", "Invalid email").isEmail(),
    body("password", "Invalid Password").isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), success: false });
        }
    let email= req.body.email;
        try {
            const user = await User.findOne({email});

            if(!user){
                return res.status(500).json({success:false });
            }
            const pwdcompare = await bcrypt.compare(req.body.password,user.password)

            if(!pwdcompare){
                return res.status(500).json({success:false});
            }
            const data = {
                user:{
                    id:user.id
                }
            }

            const othtoken = jwt.sign(data,jwtsecret)

            return res.json({ success: true ,othtoken:othtoken});

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
);

module.exports = router;
