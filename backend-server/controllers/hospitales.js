const { response, json } = require('express');
const Hospital = require('../models/hospitales');
const getHospitales = async(req, res = response) => {
    const hospitales = await Hospital.find().populate('usuario', 'nombre img');
    res.json({
        ok: true,
        hospitales
    });
}

const crearHospital = async(req, res = response) => {


    const uid = req.uid;
    const hospital = new Hospital({
        usuario: uid,
        ...req.body
    });

    try {
        const hospitalDB = await hospital.save();
        res.json({
            ok: true,
            hospital: hospitalDB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
    res.json({
        ok: true,
        msg: 'crearHospital'
    });
}

const actualizarHospital = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.params.uid;

    try {
        const hospital = await Hospital.findById(id);
        if (!hospital) {
            return res.status(404).json({
                ok: true,
                msg: 'Hospital no encontrado por id'
            });
        }
        //hospital.nombre = req.body.nombre;
        const cambiosHospital = {
            ...req.body,
            usuario: uid
        }

        const hospitalActualizado = await Hospital.findByIdAndUpdate(id, cambiosHospital, { new: true });
        res.json({
            ok: true,
            msg: 'actualizarHospital',
            hospital: hospitalActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
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