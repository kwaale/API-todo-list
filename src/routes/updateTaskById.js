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
        if(title || description || status){
            // const task = await Task.findById(id);
            if(!task) return res.json(
                {message:'Debe ser un ID existente'}
                )
                const task = await Task.findOneAndUpdate({ _id: id }, { title, description, status });
                console.log('task',task)
                console.log('task')
                return res.json({
                    message:'Tarea actualizada'
                })
        }else return res.json({
            message:'Debe recibir un title, description o status para modicar'
        });
        
        
    } catch (error) {

    }
}

module.exports = updateTaskById;