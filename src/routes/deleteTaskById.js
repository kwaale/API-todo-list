const Task = require('../models/Task');
const mongoose = require('mongoose');

const validateId = mongoose.Types.ObjectId.isValid;

const request = 'DELETE:  /delete/:id';

const deleteTaskById = async (req, res) =>{
    try {
        const { id } = req.params;

        if(!validateId(id)) res.json({
            message: 'ID is invalid',
            request
        });

        const task = await Task.findByIdAndDelete(id);

        if(!task) res.json({
            message: 'ID does not exist',
            request
        })

        return res.json({
            message: 'Task deleted',
            task
        })
    } catch (error) {
        console.error(error);
    }
}

module.exports = deleteTaskById;