const { Schema, model } = require('mongoose');



const MedicosSchema = Schema({
    nombre: {
        type: String,
        required: true

    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: String,
        default: false
    },
});

MedicosSchema.method('toJSON', function() {
    const { _v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Medicos', MedicosSchema);