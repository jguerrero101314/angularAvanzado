const Usuario = require('../models/usuario');
const { response, json } = require('express');
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

const actualizarUsuario = async(req, res = response) => {

    // TODO: validar token y comprobar si es el usuario correcto
    const uid = req.params.id;


    try {

        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: "No existe un usuario por ese id"
            });
        }

        // Actualizaciones
        const campos = req.body;
        if (usuarioDB.email === req.body.email) {
            delete campos.email;
        } else {
            const existeEmail = await Usuario.findOne({ email: req.body.email });
            if (existeEmail) {
                return res.status(400), json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email'
                });
            }

        }
        delete campos.password;
        delete campos.google;

        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });


        res.json({
            ok: true,
            usuarioActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}

module.exports = {
    getUsuarios,
    crearUsuarios,
    actualizarUsuario
}