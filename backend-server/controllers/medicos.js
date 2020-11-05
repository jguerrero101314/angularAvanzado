const { response, json } = require('express');
const Medicos = require('../models/medicos');

const getMedicos = async(req, res = response) => {

    const medicos = await Medicos.find()
        .populate('usuario', 'nombre img')
        .populate('hospital', 'nombre');

    res.json({
        ok: true,
        medicos
    });
}

const crearMedicos = (req, res = response) => {

    const uid = req.uid;
    const medico = new Medicos({
        usuario: uid,
        ...req.body
    });

    try {
        const medicoDB = medico.save();
        res.json({
            ok: true,
            medico: medicoDB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
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