const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    try {
        const arrayMascotas = await Mascota.findById();
        console.log("Mascotas Obtenidas")
        res.status(200).json(arrayMascotas)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;