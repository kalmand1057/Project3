const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    _id: { type: String},
    comment: { type: String},
});

module.exports = mongoose.model('Comment', commentSchema)
