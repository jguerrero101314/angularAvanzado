const { response } = require("express");
const fileUpload = (req, res = response) => {

    const tipo = req.params.tipo;
    const id = req.params.id;

    // validarTipo
    const tiposValidos = ['hospitales', 'medicos', 'usuarios'];
    if (!tiposValidos.includes(tipo)) {
        return res.status(400).json({
            ok: false,
            msg: "No es un medico, usuario o hospital (tipo)"
        });
    }
    //validar que exista un archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: ' No hay ningun archivo'
        });
    }

    // procesar la imagen


    res.json({
        ok: true,
        msj: "fileUploads"
    });

};

module.exports = {
    fileUpload
}