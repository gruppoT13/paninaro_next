const Ingredienti = require('../models/ingrediente');

// DELETE '/ingrediente/nome'
const delete_ingrediente = (req, res) => {
    
    let input_nome = req.params.nome;
    var query = { nome: input_nome };

    Ingredienti.deleteOne(query, (err) => {
        if (err) {
            return res.json({ Error: err });;
        }
        else {
            res.status(200).json({ message: "DELETED 1 ingrediente" });
        }

    });

}

// GET '/ingrediente'
const show_Ingredienti = (req, res) => {

    //find the specific ingrediente with that name
    Ingredienti.find({ }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Ingredienti not present." });
        }
        else return res.status(200).json(data); //return the ingredienti objects if found
    });
}

// GET '/ingrediente/nome'
const show_Prezzo = (req, res) => {
    let input_nome = req.params.nome; //get the ingrediente name

    //find the specific ingrediente with that name
    Ingredienti.findOne({ nome: input_nome }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Ingrediente doesn't exist." });
        }
        else return res.status(200).json(data); //return the ingrediente object if found
    });
}

// POST '/ingrediente'
const add_ingrediente = (req, res) => {
    //check if the ingrediente name already exists in db
    Ingredienti.findOne({ nome: req.body.nome }, (err, data) => {
        //if ingr. not in db, add it
        if (!data) {
            //create a new ingr. object using the Ingrediente model and req.body
            const newIngrediente = new Ingredienti({
                nome: req.body.nome,
                prezzo: req.body.prezzo,
            })

            // save this object to database
            newIngrediente.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.status(201).json(data);
            })
            //if there's an error or the ingr. is in db, return a message         
        } else {
            if (err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({ message: "Ingrediente already exists" });
        }
    })
};

// PATCH '/ingrediente'
const edit_prezzo_ingrediente = (req, res) => {
    let input_nome = req.body.nome; //get the ingrediente name
    let input_prezzo = req.body.prezzo; //get the ingrediente name

    //find the specific ingrediente with that name
    Ingredienti.findOne({ nome: input_nome }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Ingrediente doesn't exist." });
        }
        else{
            Ingredienti.replaceOne({ nome: input_nome }, {nome: input_nome, prezzo: input_prezzo}, (err, data) => {
                if (err || !data) {
                        return res.json({ message: "Something went wrong, please try again." });
                }else{
                    return res.status(201).json({ message: "Modified ingrediente."});
                }});
        } 
            
    });
}

// export controller functions
module.exports = { 
    delete_ingrediente,
    show_Prezzo,
    add_ingrediente,
    edit_prezzo_ingrediente,
    show_Ingredienti
}
