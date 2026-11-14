const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

console.log('defining Comment, already exists:', !!mongoose.models.Comment);

// module.exports = mongoose.model("Comment", CommentSchema); <= this was the og code 

//This is a fix for the casing issue I ran into. Since I created a lowercase comments.js file, when I used the require('../models/Comments') at the top of the controller/comments.js file, it wouldn't run in Render!
module.exports = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);//<= this is the fix

