const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/google-verify');
const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const usuarioDB = await Usuario.findOne({ email });
        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'email no encontrado'
            });
        }
        // verificar contraseña
        const validPassword = bcryptjs.compareSync(password, usuarioDB.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'contraseña no valida'
            });
        }
        // Generar el token - JWT
        const token = await generarJWT(usuarioDB.id);
        res.json({
            ok: true,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};


// const googleSignIn = async(req, res = response) => {

//     const googleToken = req.body.token;
//     try {


//         const { name, email, picture } = await googleVerify(googleToken);
//         console.log(name, email, picture);

//         const usuarioDB = await Usuario.findOne({ email });
//         let usuario;


//         if (!usuarioDB) {
//             // si no existe el usuario
//             usuario = new Usuario({
//                 nombre: name,
//                 email,
//                 password: '@@@',
//                 img: picture,
//                 google: true
//             });
//         } else {
//             // existe usuario
//             usuario = usuarioDB;
//             usuario.google = true;
//         }

//         // Guardar en DB
//         await usuario.save();

//         // Generar el TOKEN - JWT
//         const token = await generarJWT(usuario.id);
//         console.log(token);

//         res.json({
//             ok: true,
//             token
//         });

//     } catch (error) {

//         res.status(401).json({
//             ok: false,
//             msg: 'Token no es correcto',
//         });
//     }
// }
const renewToken = async(req, res = response) => {

    const uid = req.uid;
    const usuario = await Usuario.findById(uid);
    console.log(usuario);

    // Generar el TOKEN - JWT
    const token = await generarJWT(uid);
    res.json({
        ok: true,
        uid,
        token,
        usuario
    });
}

module.exports = {
    login,
    //googleSignIn,
    renewToken
}