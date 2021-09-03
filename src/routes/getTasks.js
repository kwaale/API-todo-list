const Task = require('../models/Task');

const getTasks = async (req, res)=>{
    try {
        const tasks = await Task.find();
        console.log(tasks)
        res.json(tasks)
        
    } catch (error) {
        
    }
}

module.exports = getTasks