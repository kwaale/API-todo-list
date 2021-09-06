const Task = require('../models/Task');
const mongoose = require('mongoose');

//router.put("/update/:id", updateTaskById);

const valid = mongoose.Types.ObjectId.isValid;
const body = {
    title: "Optional Type: String",
    description: "Optional Type: String",
    status: "Optional Type: Boolean"
}

const request = 'PUT:  /update/:id'; 

const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) return res.json({
            message: 'ID is required',
            request,
            body
        });

        if(!valid(id)) return res.json({
            message: 'ID is invallid to DB',
            request,
            body
        });

        const {
            title,
            description,
            status
        } = req.body;

        if (title || description || status) {
            const task = await Task.findOneAndUpdate({ _id: id }, { title, description, status }) || undefined;            
            if (!task) res.json({
                        message: 'Debe ser un ID existente',
                        request,
                        body                        
                });
            return res.json({
                message: 'Task updated',
                request,
                body
            });
        } else {
            return res.json({
                message: 'You must receive a title, description or status to modify',
                request,
                body
            });
        }
    } catch (error) {
        console.error('******',error)
    }
}

module.exports = updateTaskById;