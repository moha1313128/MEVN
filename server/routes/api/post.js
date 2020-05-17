const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

// Get Post
router.get("/", (req, res) => {
  res.send("Add Post");
});
// Add Post

// Update Post

// Delete Post

module.exports = router;
