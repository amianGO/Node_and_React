const mongoose = require('mongoose');
require('dotenv').config();

const getConnection = async () => {
    try {
        const url = process.env.URL_MONGO;
        await mongoose.connect(url);
        console.log("Conectado a la base de datos.")
    } catch (err) {
        console.error("No se ha podido conectar con la base de datos")
    }
}

module.exports = {
    getConnection
}