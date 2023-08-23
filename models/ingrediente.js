const mongoose = require('mongoose');

const Ingrediente_Schema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    prezzo: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Ingredienti', Ingrediente_Schema);