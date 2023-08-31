const mongoose = require("mongoose");

const OrdineSchema = new mongoose.Schema({
    status: String,
    data_ordine: String,
    data_ordinazione: String,
    nr_ordine: Number,
    prodotti: Object
});

const Ordine = mongoose.model('Ordine', OrdineSchema);
module.export = Ordine;