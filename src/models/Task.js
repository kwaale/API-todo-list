const {Schema, model} = require('mongoose');

const task = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    status:Boolean
},
{
    timestamps:true
});

module.exports = model('task', task);