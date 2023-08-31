const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    conto: Number,
    nr_ordine: Number,
    permessi: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Clienti', ClienteSchema);