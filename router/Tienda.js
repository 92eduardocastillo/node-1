const { json } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render("index",{titulo : "tienda"})
})

router.get('/api', (req, res) =>{
    res.send(
        {
         name: "Pollo",
         precio: 2.10
        }
         );
    
})


router.post('/peliculas', (req, res) =>{    
        
}
)

module.exports = router