const express = require("express");
const { dbConnection } = require('./database/config');

// crear el servidor de express
const app = express();

// Base de datos
dbConnection();



// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto ' + 3000);
});