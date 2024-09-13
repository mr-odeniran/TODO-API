const express = require("express")
const app = express()
const connectDb = require("./config/db")
const router = require("./route/todo_route")
app.use(express.json())

connectDb()

app.use("/api/v1",router)



module.exports = app