const mongoose = require('mongoose');                                   //Importamos la libreria de Mongoose

const productSchema = new mongoose.Schema({
    nombre: { type: String, require: true},
    serial: {type: Number, require: true, unique: true},
    img: {type: String, require: true},
    state: {type: String, require: true, enum: ['IsStock','NoStock']}
},

{timestamps: true}); //Agregamos la propiedad de timestamps para que se agreguen las fechas de creacion y actualizacion


module.exports = mongoose.model('Product', productSchema);