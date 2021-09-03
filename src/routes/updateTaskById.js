const { findOneAndUpdate, findById } = require('../models/Task');
const Task = require('../models/Task');



//router.put("/update/:id", updateTaskById);
const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id) return res.json({
            message:'ID is required'
        })
        
        const {
            title,
            description,
            status
        } = req.body;
        console.log('id',id)
        console.log('title',title)
        // const task = await Task.findById(id);
        const task = await Task.findOneAndUpdate({ _id: id }, { title, description, status });
        return res.json({
            message:'Tarea actualizada'
        })

    } catch (error) {

    }
}

module.exports = updateTaskById;