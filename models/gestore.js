const mongoose = require("mongoose");

const GestoreSchema = new mongoose.Schema({
    admin: String,    
    password: String,
    permessi: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('Gestori', GestoreSchema);