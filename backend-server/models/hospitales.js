const { Schema, model } = require('mongoose');
const HospitalSchema = Schema({
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
    }

}, { collection: 'hospitales' });

HospitalSchema.method('toJSON', function() {
    const { _v, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Hospitales', HospitalSchema);