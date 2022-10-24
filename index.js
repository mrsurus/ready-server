const express = require('express')
const app = express()
const cors = require("cors")
const  port =process.env.Port || 4000;

app.use(cors())
const products = require('./data/product.json')

app.get('/', (req, res) => {
    res.send('welcome to server')
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res)=> {
    const s = req.params.id
    const singleProduct = products.find(p => p._id == s)
    if(!singleProduct){
        res.send('kisu kuje  paini')
    }
    res.send(singleProduct)
})

app.get('/category/:id', (req, res)=> {
    const k = req.params.id
    const category = products.filter(p => p.category == k)
    if(!category){
        res.send('passi ns solve')
    }
    res.send(category)
})


app.listen(port, () => {
    console.log('server is running on ' , port);
})
module.exports = app;