/**
 * Path: '/api/login'
 */
const { Router } = require('express');
const { login, renewToken } = require('../controllers/auth'); //googleSignIn,
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt')
const router = Router();

router.post('/',

    [
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ],
    login
)

router.post('/google', async(req, res) => {
    var token = req.body.token;
    var googleUser = await verify(token)
        .catch(() => {
            return;
        });

    if (googleUser === undefined) {
        return res.status(403).json({
            ok: false,
            mensaje: 'Token no válido'
        });
    } else {
        Usuario.findOne({ email: googleUser.email }, (err, usuarioDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar usuarios',
                    errors: err
                });
            }
            if (usuarioDB) {
                if (usuarioDB.google === false) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Debe usar su autenticación estándar',
                    });
                } else {
                    var token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 14400 });
                    return res.status(200).json({
                        ok: true,
                        usuario: usuarioDB,
                        token,
                        id: usuarioDB.id
                    });
                }
            } else {
                // El usuario no existe, hay que crearlo
                var usuario = new Usuario({
                    nombre: googleUser.nombre,
                    email: googleUser.email,
                    img: googleUser.img,
                    google: true,
                    password: ':)'
                });
                usuario.save((err, usuarioDB) => {
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error al guardar usuario',
                            errors: err
                        });
                    }
                    var token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 14400 });
                    return res.status(200).json({
                        ok: true,
                        usuario: usuarioDB,
                        token,
                        id: usuarioDB.id
                    });
                });
            }
        });
    }
});

router.get('/renew', [
        validarJWT,
        validarCampos
    ],
    renewToken
)



module.exports = router;