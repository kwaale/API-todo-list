const Task = require('../models/Task');

const body = {
    title: "Required Type: String",
    description: "Optional Type: String",
}

const request = 'POST:  /add'; 

const addTask = async (req, res) =>{
    try {
        const { title, description } = req.body;
        if(!title) res.json({
            message: 'Title is required',
            request,
            body
        });

        const task = await new Task({title,description});
        await task.save();
        return res.json(task)
    } catch (error) {
        console.error(error);
    }
}

module.exports = addTask;