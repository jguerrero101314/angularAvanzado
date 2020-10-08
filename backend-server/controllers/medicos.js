const { response, json } = require('express');

const getMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getMedicos'
    });
}

const crearMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crearMedicos'
    });
}

const actualizarMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarMedicos'
    });
}

const eliminarMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarMedicos'
    });
}

module.exports = {
    getMedicos,
    crearMedicos,
    actualizarMedicos,
    eliminarMedicos
}