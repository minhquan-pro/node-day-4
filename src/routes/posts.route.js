const express = require("express");
const app = express();

const postController = require("../controllers/post.controller");

app.get("/", postController.getAllPosts);
app.get("/:id", postController.getAllPostByUserId);

module.exports = app;
