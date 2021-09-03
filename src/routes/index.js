const express = require('express');
const getTasks = require('./getTasks');
const addTask = require('./addTask');
const deleteTaskById = require('./deleteTaskById');
const updateTaskById = require('./updateTaskById');

//Metodo para ingresar rutas deleteTask
const router = express.Router();

router.get("/", getTasks);
router.post("/add", addTask);
router.post("/delete", deleteTaskById);
router.put("/update/:id", updateTaskById);


module.exports = router;