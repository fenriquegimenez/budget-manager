const { request } = require("express");
const express = require("express");
const app = express();
const config = require("./config/config");

app.get("/", (request, response) => {
  response.send("Hello World");
});

const port = config.port;

app.listen(port, () => {
  console.log(`[Server] Server listening at port ${port}.`);
});
