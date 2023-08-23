const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    conto: Number,
    nr_conto: Number
});

module.exports = mongoose.model('Clienti', ClienteSchema);