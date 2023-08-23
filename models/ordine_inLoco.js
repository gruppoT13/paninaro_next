const mongoose = require("mongoose");

const OrdineInLocoSchema = new mongoose.Schema({
    status: String,
    data_ordine: String,
    tavolo: Number,
    nr_ordine: Number
    // lista_tavoli: Object,
    // permessi: Boolean
});

const OrdineInLoco = mongoose.model('OrdiniInLoco', OrdineInLocoSchema);
module.export = OrdineInLoco;