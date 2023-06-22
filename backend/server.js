require("dotenv").config();
const express = require('express')
const app = express()

app.use(express.json({extended:false}))
app.get("/", (req,res) => console.log("server up and running"))

const connectDB = require('./config/db')
connectDB()


const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:" + PORT);
})