const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const isAuthenticated = require("../middleware/isAuthenticated");
const multer = require("multer");
const randomstring = require("randomstring");

const User = require("../models/User");
const Receipt = require("../models/Receipt");

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
    ) {
        cb(null, true);
    } else {
        cb(new Error("Wrong file format."), false);
    }
};

const image_storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(
            null,
            "image_" +
            new Date().toISOString().replace(/:|\./g, "_") +
            randomstring.generate({ length: 12, charset: "alphabetic" }) +
            "." +
            file.originalname.split(".")[1]
        );
    }
});

const upload_image = multer({
    storage: image_storage,
    limits: {
        // up to 5 MB
        fileSize: 1028 * 1024 * 5
    },
    fileFilter: fileFilter
}).single("image");

router.get("/", isAuthenticated, (req, res, next) => {
    const userId = req.userId;

    Receipt.find({author: userId}).exec((err, receipts) => {
        if(err) {
            return res.status(500).json({error: err});
        }
        return res.status(200).json({ receipts: receipts });
    })
});

router.get("/:id", isAuthenticated, (req, res, next) => {
    const userId = req.userId;
    const id = req.params.id;

    Receipt.find({_id: id}).exec((err, receipt) => {
        if(err) {
            return res.status(500).json({error: err});
        }
        if(!receipt){
            return res.status(404).json({message: "User doesnt have receipt with such id!"});
        }
        if(receipt.author !== userId) {
            return res.status(403).json({ message: "This user is not allowed to access this receipt!"});
        }

        return res.status(200).json({ receipt: images });
    })
});

router.post("/", isAuthenticated, (req, res, next) => {
    const userId = req.userId;

    upload_image(req, res, err => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({
                error: err,
                message: "Upload error"
            });
        } else if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const file = req.file;
            if (!file) {
                return res.status(500).json({ message: "File not uploaded error" });
            }

            const categories = req.body.categories || [];
            const title = req.body.title;
            const description = req.body.description;

            let receipt = new Receipt({
                _id: new mongoose.Types.ObjectId(),
                author: userId,
                categories: categories,
                title: title,
                description: description,
                urlPath: file.path,
            });

            receipt.save().then(result => {
                return res.status(201).json({ receipt: result });
            }).catch(err => {
                return res.status(500).json({
                    error: err
                });
            });
        }
    });
});

router.patch("/:id", isAuthenticated, (req, res) => {
    console.log(req.body);
    const fields = req.body.fields; //fields to update
    const id = req.params.id;
    const userId = req.userId;

    Receipt.findOne({ _id: id }).exec((err, receipt) => {
        if (err) {
            return res.status(500).json({ error: err });
        } else {
            if (!receipt) {
                return res.status(404).json({
                    message: "Not found receipt with such id"
                });
            } else if (receipt.author !== userId) {
                return res.status(403).json({ message: "This user is not allowed to access this receipt!"});
            } else {
                for (let key in fields) {
                    if (receipt.toObject().hasOwnProperty(key)) {
                        receipt[key] = fields[key];
                    } else {
                        return res.status(400).json({
                            message: "Such property doesnt exist in model."
                        });
                    }
                }
                receipt.save().then(result => {
                        return res.status(200).json({
                            receipt: result
                        });
                    })
                    .catch(err => {
                        return res.status(500).json({
                            error: err
                        });
                    });
            }
        }
    });
});

module.exports = router;