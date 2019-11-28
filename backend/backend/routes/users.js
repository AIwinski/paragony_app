const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const config = require("../config/config");

const User = mongoose.model("User");

router.post("/register", (req, res, next) => {
    User.find({
        email: req.body.email
    })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(400).json({
                    message: "Mail already exists"
                });
            } else {
                if (!validator.isEmail(req.body.email)) {
                    return res.status(400).json({
                        message: "Invalid email"
                    });
                }
                if (validator.isEmpty(req.body.password) || req.body.password.length < 6) {
                    return res.status(400).json({
                        message: "Invalid password"
                    });
                }

                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err,
                            message: "hashing error"
                        });
                    } else {
                        let user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                return res.status(201).json({
                                    message: "User created successfully.",
                                    user: result
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                return res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        });
});

router.post("/login", (req, res, next) => {
    User.findOne({
        email: req.body.email
    })
        .exec()
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Auth failed. User does not exist"
                });
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        message: "Auth failed"
                    });
                } else {
                    if (result === false) {
                        return res.status(401).json({
                            message: "Auth failed"
                        });
                    } else {
                        const token = jwt.sign(
                            {
                                userId: user._id
                            },
                            config.JWT_KEY, //process.env.JWT_KEY,
                            {
                                expiresIn: "1d"
                            }
                        );
                        const userInfo = {
                            id: user._id,
                            email: user.email
                        };
                        return res.status(200).json({
                            message: "Auth successful",
                            token: token,
                            user: userInfo
                        });
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
