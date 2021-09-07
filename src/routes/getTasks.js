const Task = require('../models/Task');

const getTasks = async (req, res)=>{
    try {
        const tasks = await Task.find();
        res.json(tasks)
    } catch (error) {
        console.error(error);
    }
}

module.exports = getTasks