const express = require("express");

// crear el servidor de express

const app = express();

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto ' + 3000);
});