const Task = require('../models/Task')

const pruebas = async (req, res)=>{
    const { id } = req.params;
    const task = await Task.findById(id);
    console.log('pruebas',task)
    res.json('task');
}
module.exports = pruebas;