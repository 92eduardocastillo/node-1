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
       
        const body = req.body;
        console.log(req.body);
        
        if(body.numero===1){
        res.send({alert:"combo"});
        }
        else{
            if(body.numero===2)
            res.send({alert:"La seccion ha sido cerrada"}); 
            else{
                res.send({alert:"accion no valida"});     
            } 
        }
})

module.exports = router