const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./db');

//Configuracion
//Setea el puerto con el process.env para el doploy y en su defecto en el puerto 3001.
app.set('port', process.env.PORT || 3001);
//Middleware
//Morgan sirve para ver la ruta que se consulta
app.use(morgan('dev'));
//Verifica si el dato que viene es json y si no lo parsea a json
app.use(express.json())

//Routes
//Llamamos al archivo de rutas, para buscar donde hace el match
app.use(require('./src/routes'));

app.listen(3001, ()=>{
    console.log(`Listen port ${app.get('port')}`)
})