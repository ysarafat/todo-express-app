const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors')
const todoRoutes = require('./routes/todoRoutes.js')

const PORT = 5000;
const app = express()
// middleware
app.use(cors())
app.use(express.json())

// database connection with mongo0db
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2/todos') 
    .then(()=> console.log('connect successfully'))
    .catch((err) => console.log(err))

// server routes
app.use('/todo', todoRoutes)

app.listen(PORT, ()=> {
    console.log('running')
})