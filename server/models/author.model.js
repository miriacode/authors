const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must have at least 2 characters long."],
        unique: [true, "The author was already added."]
    },
    image: String,
    books: {
        type: Boolean,
        default: false
    },
    articles: {
        type: Boolean,
        default: false
    },
    graphicnovels: {
        type:Boolean,
        default: false
    },
    tales: {
        type:Boolean,
        default: false
    }
}, {timestamps: true, versionKey: false})

const Author = mongoose.model("authors", AuthorSchema);
module.exports = Author;