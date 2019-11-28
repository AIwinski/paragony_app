const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    categories: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now()
    },
    title: String,
    description: String,
    urlPath: String,
});

module.exports = mongoose.model("Image", imageSchema);