const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb+srv://mean_user:LrsjeR2QyCCB9S6c@cluster0.ngbyg.mongodb.net/hospitaldb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('BD Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la bd ver logs');
    }
    return true;
}

module.exports = {
    dbConnection
}