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
        ref: 'Usuario',
        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospitales',
        require: true
    }

}, { collection: 'medicos' });

MedicosSchema.method('toJSON', function() {
    const { _v, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Medicos', MedicosSchema);