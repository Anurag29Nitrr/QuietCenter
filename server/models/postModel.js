const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name: { type: String },
    story: { type: String, required: true },
    supports: { type: Number, default: 0 }
});

module.exports = mongoose.model("Post", postSchema);
