const express = require('express');
require('dotenv').config();
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./db');
const routes = require('./src/routes');

//Configuracion
//Setea el puerto con el process.env para el doploy y en su defecto en el puerto 3001.
app.set('port', process.env.PORT || 3001);
//Middleware
//Morgan sirve para ver la ruta que se consulta
app.use(morgan('dev'));
//Verifica si el dato que viene es json y si no lo parsea a json
app.use(express.json());
//Metodo que decodifica la informacion que viene de html y lo puede limmitar
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

//Routes
//Llamamos al archivo de rutas, para buscar donde hace el match
app.use('/', routes);

app.listen(3001, ()=>{
    console.log(`Listen port ${app.get('port')}`)
})