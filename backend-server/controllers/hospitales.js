const { response, json } = require('express');
const getHospitales = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getHospitales'
    });
}

const crearHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crearHospital'
    });
}

const actualizarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarHospital'
    });
}

const eliminarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarHospital'
    });
}

module.exports = {
    getHospitales,
    crearHospital,
    actualizarHospital,
    eliminarHospital
}