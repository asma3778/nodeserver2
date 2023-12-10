const express = require('express')
const productRouter = require('../routes/productRoute')

const app = express()

const port = 3009

app.get('/', (req, res)=>{
    res.send('welcome to my server')
})

app.use("/products", productRouter)

app.listen(port, ()=>{
    console.log(`server running in ${port}`)
})