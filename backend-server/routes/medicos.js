/**
 * Medicos
 * ruta: /api/medicos
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getMedicos,
    crearMedicos,
    actualizarMedicos,
    eliminarMedicos
} = require('../controllers/medicos');

const router = Router();

router.get('/', getMedicos);
router.post('/', [
        validarJWT,
        check('nombre', 'El nombre del medico es necesario').not().isEmpty(),
        validarCampos
    ],
    crearMedicos
);
router.put('/:id', [],
    actualizarMedicos
);

router.delete('/:id', eliminarMedicos);


module.exports = router;