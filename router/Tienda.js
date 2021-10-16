const { json } = require('express');
const express = require('express');
const router = express.Router();

const url = "http://localhost:3000/productos"
let resultado="4";

router.get('/', (req, res) =>{
    console.log(req.body)
    res.render("index",{titulo : "tienda"})
})

router.get('/api',(req, res) =>{
    
    res.status(200).json(
        {resultado: "datos"}      
    );
    
})

module.exports = router