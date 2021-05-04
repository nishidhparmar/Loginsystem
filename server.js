const express = require("express")
const db = require("./db/connection")
const Router = require("./routes/Home")
const bodyparser = require('body-parser')


const app = express()

app.use(express.static('public'))
app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.use("/", Router)











app.listen(3000, () => {
    console.log("server running on port 3000");
})

