const express = require('express')

const app = express()

const port = 3009

app.get('/', (req, res)=>{
    res.send('welcome to my server')
})

app.get('/products', (req,res)=>{
    res.send({
        products : [
            {id: 1, title: "laptop"},
            {id: 2, title: "PC"},
            {id: 3, title: "Camera"},
            {id: 4, title: "Smart Phone"},
        ]
    })
})

app.listen(port, ()=>{
    console.log(`server running in ${port}`)
})