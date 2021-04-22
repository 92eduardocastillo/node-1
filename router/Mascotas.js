const express = require('express');
const router = express.Router();
const prueba = require('../prueba.json')

router.post('/',(req, res)=>{
    
    const body = {
        id: 2,
        name: "edu"
    }
    prueba.personas.push(body)

    
    res.send(prueba.personas);
    
})

router.get('/', (req, res) => {
    res.render("mascotas",{
        arrayMascotas: [
            {id: 'jsjsjs', nombre:'rex', descripcion: 'rex descripcion'},
            {id: 'jaaa', nombre:'chanchan', descripcion: 'chanchan descripcion'}
        ]
    })
})

module.exports = router