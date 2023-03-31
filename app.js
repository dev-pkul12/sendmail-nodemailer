const express = require('express');
const send = require('./Controllers/sendController')
const app = express();
const port = 8000;

app.get("/", (req, res)=>{
  res.status(200).send("Hello From Express")
})

app.get("/sendMail", send)

app.listen(port,()=>{
   console.log("server is running on : 8000")  
})