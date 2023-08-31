const mongoose = require("mongoose");

const ProdottoSchema = new mongoose.Schema({
    nome_prodotto: String,
    prezzo_prodotto: Number,
    ingredienti: Object
});

const Prodotti = mongoose.model('Prodotti', ProdottoSchema);
module.export = Prodotti;