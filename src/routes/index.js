const express = require('express');
const getTasks = require('./getTasks');
const addTask = require('./addTask');
const deleteTaskById = require('./deleteTaskById');
const updateTaskById = require('./updateTaskById');
const pruebas = require('./pruebas');

//Metodo para ingresar rutas
const router = express.Router();

router.get("/", getTasks);
router.get("/pruebas/:id", pruebas);
router.post("/add", addTask);
router.delete("/delete/:id", deleteTaskById);
router.put("/update/:id", updateTaskById);


module.exports = router;