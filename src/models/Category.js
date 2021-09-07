const {Schema, model} = require('mongoose');


//Shema crea ID por defecto
//Este modelo usa varias formas de definir modelos
const category = new Schema({
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = model('categores', category);