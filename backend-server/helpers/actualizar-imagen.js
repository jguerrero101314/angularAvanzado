const usuario = require('../models/usuario');
const Medico = require('../models/medicos');
const Hospitales = require('../models/hospitales');
const fs = require('fs');

const borrarImagen = (path) => {
    if (fs.existsSync(path)) {
        // borrar la imagen anterior
        fs.unlinkSync(path);
    }
}
const actualizarImagen = async(tipo, id, nombreArchivo) => {

    let pathViejo = '';
    switch (tipo) {
        case 'medicos':
            const medico = await Medico.findById(id);
            if (!medico) {
                console.log('No es un médico por id');
                return false;
            }

            pathViejo = `./uploads/medicos/${ medico.img }`;
            borrarImagen(pathViejo);

            medico.img = nombreArchivo;
            await medico.save();
            return true;

            break;

        case 'hospitales':
            const hospitales = await Hospitales.findById(id);
            if (!hospitales) {
                console.log('No es un hospital por id');
                return false;
            }

            pathViejo = `./uploads/hospitales/${ hospitales.img }`;
            borrarImagen(pathViejo);

            hospitales.img = nombreArchivo;
            await hospitales.save();
            return true;
            break;

        case 'usuarios':
            const usuarios = await usuario.findById(id);
            if (!usuarios) {
                console.log('No es un usuario por id');
                return false;
            }

            pathViejo = `./uploads/usuarios/${ usuarios.img }`;
            borrarImagen(pathViejo);

            usuarios.img = nombreArchivo;
            await usuarios.save();
            return true;
            break;

        default:
            break;
    }
};

module.exports = {
    actualizarImagen
};