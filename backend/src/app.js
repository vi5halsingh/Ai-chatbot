const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.json({msg:"shri ganeshay namha"})
})

app.use(express.json())
module.exports = app;
 