const express = require("express")
const bodyParser = require("body-parser")
const mailRoutes = require("./routes/mail")
const app = express()
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  )
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  next()
})

app.use(mailRoutes)

app.listen(3000)
