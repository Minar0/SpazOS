const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Ping!")
})

function isHere() {
  server.listen(3000, () => {
    console.log("Pong!")
  })
}

module.exports = isHere