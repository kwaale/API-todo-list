const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/test';//Cambiar nombre DB

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(()=> console.log('base de datos conectada'))
.catch((error)=>console.error(error));

const Cat = mongoose.model('Cat', {
    name:String
});

const kitty = new Cat({
    name:'gatoKitty'
});
const invoca = async ()=>{
    const data = await kitty.save()
    // const gato = data.json();
    console.log(data)
    return data;
}
invoca()

module.exports = mongoose