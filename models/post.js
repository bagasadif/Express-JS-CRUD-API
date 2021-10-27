const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require d: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
