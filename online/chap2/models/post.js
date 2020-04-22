const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    title: String,
    content: String,
    author: String
}, {
    timestamps: true
});

module.exports = mongoose.model('posts', Post);