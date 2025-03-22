const mongoose = require('mongoose');                                   //Importamos la libreria de Mongoose

const productSchema = new mongoose.Schema({
    nombre: { type: String, require: true},
    serial: {type: Number, require: true, unique: true},
    img: {type: String, require: true},
    state: {type: String, require: true, enum: ['IsStock','NoStock']}
},{timestamp: true});

module.exports = mongoose.model('Product', productSchema);