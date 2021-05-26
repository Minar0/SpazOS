const express = require("express");
const { port } = require("./config.json");

const app = express();

app.get("/", (request, response) => {
    return response.sendFile("index.html", { root: "." });
});

app.listen(port, () => console.log("App is listening on localhost"))