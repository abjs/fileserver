const express = require('express')
const serveIndex = require('serve-index')

const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(
  '',
  express.static('/home/abjs/files'),
  serveIndex('/home/abjs/files', { icons: true })
)

app.listen(port, () => console.log(`🚀 is on port ${port}...`))
