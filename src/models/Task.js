const {Schema, model} = require('mongoose');


//Shema crea ID por defecto
//Este modelo usa varias formas de definir modelos
const task = new Schema({
    title:{
        //Se difine type
        type:String,
        //Es un campo obligatorio
        required:true
    },
    //Campo definido string, no obligatorio
    description:String,
    status:{
        type:Boolean,
    //Por defecto se crea falso
        default:false
    }
},{
    timestamps:true
});

module.exports = model('tasks', task);