// getTodo
const { response, json } = require('express');


const getBusquedaTotal = async(req, res = response) => {


    const busqueda = req.params.busqueda;
    console.log(busqueda);
    res.json({
        ok: true,
        msg: 'exitoso',
        busqueda
    });
};

module.exports = {
    getBusquedaTotal
};