// getTodo
const { response, json } = require('express');
const Usuario = require('../models/usuario');
const Medicos = require('../models/medicos');
const Hospital = require('../models/hospitales');


const getBusquedaTotal = async(req, res = response) => {


    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');


    const [usuarios, medicos, hospitales] = await Promise.all([
        Usuario.find({ nombre: regex }),
        Medicos.find({ nombre: regex }),
        Hospital.find({ nombre: regex })
    ])


    res.json({
        ok: true,
        msg: 'exitoso',
        usuarios,
        medicos,
        hospitales
    });
};

module.exports = {
    getBusquedaTotal
};