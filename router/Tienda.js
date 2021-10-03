const { json } = require('express');
const express = require('express');
const router = express.Router();

const url = "http://localhost:3000/productos"
let resultado="4";

const Obtener = async () => {
    
    

        

    
}

router.get('/', (req, res) =>{
    res.render("index",{titulo : "tienda"})
})

router.get('/api',(req, res) =>{

    res.status(200).json(
        {resultado: "datos"}      
    );
    
})


router.post('/peliculas', (req, res) =>{    
        
}
)

module.exports = router