const mongoose = require("mongoose");

const OrdineTakeAwaySchema = new mongoose.Schema({
    status: String,
    data_ordine: String,
    data_ordinazione: String,
    nr_ordine: Number
    // permessi: Boolean
});

const OrdineTakeAway = mongoose.model('OrdineTakeAway', OrdineTakeAwaySchema);
module.export = OrdineTakeAway;