const express = require("express");

// crear el servidor de express

const app = express();


//<mean_user>:<LrsjeR2QyCCB9S6c>

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