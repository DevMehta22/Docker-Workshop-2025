require("dotenv").config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const router = require("./routes/BookRoutes")
const cors = require("cors")

const corsOptions = {
  origin: ['https://library-management-web-app-frontend.vercel.app','http://localhost:3000'], // frontend origin
  methods:["POST","GET","PUT","PATCH","DELETE"],
  credentials:true
};

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/book',router)
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to DB")
    const port = process.env.PORT
    app.listen(port,(err)=>{
        if(err) throw err;
        console.log(`server is running on port ${port}`) 
    })

}).catch((err)=>{
    console.log(err)
})
