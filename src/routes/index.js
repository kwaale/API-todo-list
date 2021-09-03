const express = require('express');
//Metodo para ingresar rutas
const router = express.Router();

router.get("/", (req, res)=>{
    res.json({messaje:'Hola app'});
});

module.exports = router;