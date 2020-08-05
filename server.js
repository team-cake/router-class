const express = require('express')
const app = express()
const router = require('./router')

app.use(router)

const PORT = 4000

app.listen(PORT, () => {
    console.log(`🚀 Server started at port ${PORT}!`);
  });