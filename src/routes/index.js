const express = require("express");
const app = express();

const postRoute = require("./posts.route");

app.use("/posts", postRoute);

module.exports = app;
