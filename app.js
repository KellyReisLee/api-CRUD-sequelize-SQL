const express = require('express')
const PORT = 3000;
const app = express()

app.get("/", function (req, res) {
  console.log("Welcome to main page");
})


app.listen(PORT, () => {
  console.log('Server running...');
})