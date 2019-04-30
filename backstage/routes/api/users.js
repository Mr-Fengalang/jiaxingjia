const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const passport = require('passport');
router.get("/test", (req, res) => {
    User.find({}, function (err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.json({
                msg: doc
            })
        }
    })
})

router.post("/register", (req, res) => {
    User.findOne({
            tel: req.body.tel
        })
        .then((user) => {
            if (user) {
                return res.status(400).json({
                    msg: "已注册"
                })
            } else {
                const newUser = new User({
                    tel: req.body.tel,
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name
                })
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    });
                });
            }

        })
})
router.post("/login", (req, res) => {
    const tel = req.body.tel
    const password = req.body.password

    User.findOne({
            tel
        })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    msg: "没有注册"
                })
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const rule = {
                            id: user.id,
                            name: user.name
                        }
                        jwt.sign(rule, 'secret', {
                            expiresIn: 3600
                        }, (err, token) => {
                            if (err) throw err;
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            })
                        })
                        // res.json({
                        //     msg: "success"
                        // })
                    } else {
                        return res.status(404).json({
                            msg: "密码不对啊兄嘚"
                        })

                    }

                })

        })
})
router.get("/curretn", passport.authenticate("jwt", {
    session: false
}), (req, res) => {
    res.json({
        name: req.user.name,
        tel: req.user.tel,
        id: req.user.id
    })
})
module.exports = router;