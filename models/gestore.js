const mongoose = require("mongoose");

const GestoreSchema = new mongoose.Schema({
    admin: String,    
    password: String,
    // permessi: Boolean
});

const Gestori = mongoose.model('Gestori', GestoreSchema);
module.export = Gestori;