require("dotenv").config();

const express = require("express");
const app = express();

const responseFormat = require("./src/middlewares/responseFormat");
const notFound = require("./src/middlewares/notFound");
const errorHandle = require("./src/middlewares/errorHandle");
const appRoute = require("./src/routes");
const port = 3000;

app.use(express.json());
app.use(responseFormat);

app.use("/api", appRoute);

app.use(notFound);
app.use(errorHandle);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
