require('dotenv').config();
const express = require("express");
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor de express
const app = express();

// configurar cors
app.use(cors());

// Base de datos
dbConnection();

console.log(process.env);

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});