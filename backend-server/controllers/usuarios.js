const Usuario = require('../models/usuario');
const { response } = require('express');
const bcryptjs = require('bcryptjs');

const getUsuarios = async(req, res) => {
    const usuarios = await Usuario.find({}, 'nombre role email google apellido img');
    res.json({
        ok: true,
        usuarios
    });
}

const crearUsuarios = async(req, res = response) => {

    const { email, password, nombre, apellido } = req.body;



    try {

        const existeEmail = await Usuario.findOne({ email });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }

        const usuario = new Usuario(req.body);

        // Encriptar password
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        // Guardar usuario
        await usuario.save();

        res.json({
            ok: true,
            usuario
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }


}

module.exports = {
    getUsuarios,
    crearUsuarios
}