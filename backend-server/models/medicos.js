const { Schema, model } = require('mongoose');
const MedicosSchema = Schema({
    nombre: {
        type: String,
        required: true

    },
    img: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospitales'
    }

}, { collection: 'medicos' });

MedicosSchema.method('toJSON', function() {
    const { _v, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Hospitales', MedicosSchema);