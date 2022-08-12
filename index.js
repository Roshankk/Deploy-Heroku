const express = require('express')

const app = express()

const post = require('./post')

app.get('/post',(req,res)=>{
    res.json(post)
})


app.get('/', (req,res) => {
    res.send("Api is running")
})

app.listen(process.env.PORT || 5050, ()=> console.log("Server is running"))