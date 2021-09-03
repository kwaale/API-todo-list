const Task = require('../models/Task');
const addTask = async (req, res) =>{
    try {
        const { title, description } = req.body;
        const task = await new Task({title,description});
        await task.save();
        return res.json(task)
    } catch (error) {
        
    }
}

module.exports = addTask;