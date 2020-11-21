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

const actualizarMedicos = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.params.uid;

    try {
        const medico = await Medicos.findById(id);
        if (!medico) {
            return res.status(404).json({
                ok: true,
                msg: 'Medico no encontrado por id'
            });
        }
        //hospital.nombre = req.body.nombre;
        const cambiosMedicos = {
            ...req.body,
            usuario: uid
        }

        const medicoActualizado = await Medicos.findByIdAndUpdate(id, cambiosMedicos, { new: true });
        res.json({
            ok: true,
            medico: medicoActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
}

const eliminarMedicos = async(req, res = response) => {
    const id = req.params.id;

    try {
        const medico = await Medicos.findById(id);
        if (!medico) {
            return res.status(404).json({
                ok: true,
                msg: 'medico no encontrado por id'
            });
        }
        await Medicos.findByIdAndDelete(id);
        res.json({
            ok: true,
            msg: 'medico eliminado'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }
}

module.exports = {
    getMedicos,
    crearMedicos,
    actualizarMedicos,
    eliminarMedicos
}