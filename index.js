const express = require('express')
const timeRouter = require('./routers/TimeRouter')
const app = express()
const port = 3000

app.use("/api/", timeRouter)
  
app.listen(port, ()=>{
    console.log('starting server')
})