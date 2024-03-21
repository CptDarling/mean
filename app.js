require('dotenv').config()

let express = require('express')
let path = require('path')
let app = express()

//configure app to serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res, next) => {
  //respond with index.html
  req.sendFile('index.html')
})
app.listen(3000 || process.env.PORT, () => {
  console.log("Server listening on port", 3000 || process.env.PORT)
})
