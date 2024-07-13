const express = require('express')
const routes = require('./src/routes')
const PORT = 3000;
const app = express()
routes(app)



app.listen(PORT, () => {
  console.log('Server running...');
})