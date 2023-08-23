const Clienti = require('../models/cliente');

// DELETE '/cliente/nr_conto'
const delete_cliente = (req, res) => {
    
    let input_nr_conto = parseInt(req.params.nr_conto); //get the ingrediente name
    var query = { nr_conto: input_nr_conto };

    Clienti.deleteOne(query, (err) => {
        if (err) {
            return res.json({ Error: err });
        }
        else {
            res.status(200).json({ message: "DELETED 1 cliente" });
        }

    });

}

// GET '/cliente'
const show_Clienti = (req, res) => {
    Clienti.find({}, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Clienti not present." });
        }
        else return res.status(200).json(data); //return the clienti objects if found
    });
}

// GET '/cliente/nr_conto'
const show_Conto = (req, res) => {
    let input_nr_conto = parseInt(req.params.nr_conto); //get the ingrediente name
    var query = { nr_conto: input_nr_conto };
    
    //find the specific cliente with that number
    Clienti.findOne(query, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Cliente doesn't exist." });
        }
        else return res.status(200).json(data); //return the cliente object if found
    });
}

// POST '/cliente'
const add_cliente = (req, res) => {
    //check if the cliente name already exists in db
    Clienti.findOne({ nr_conto: req.body.nr_conto }, (err, data) => {
        //if ingr. not in db, add it
        if (!data) {
            //create a new cliente object using the Ingrediente model and req.body
            const newCliente = new Clienti({
                nr_conto: req.body.nr_conto,
                conto: req.body.conto,
            })

            // save this object to database
            newCliente.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.status(201).json(data);
            })
            //if there's an error or the cliente is in db, return a message         
        } else {
            if (err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({ message: "Ingrediente already exists" });
        }
    })
};

// PATCH '/cliente'
const edit_conto_cliente = (req, res) => {
    let input_nr_conto = req.body.nr_conto; //get the conto number
    let input_conto = req.body.conto; //get the ingrediente name

    //find the specific ingrediente with that name
    Clienti.findOne({ nr_conto: input_nr_conto }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Cliente doesn't exist." });
        }
        else{
            Clienti.replaceOne({ nr_conto: input_nr_conto }, { conto: input_conto, nr_conto: input_nr_conto }, (err, data) => {
            if (err || !data) {
                    return res.json({ message: "Something went wrong, please try again." });
            }else{
                return res.status(201).json({ message: "Modified cliente."});
            }});
        } 
            
    });
}

// export controller functions
module.exports = { 
    delete_cliente,
    show_Conto,
    add_cliente,
    edit_conto_cliente,
    show_Clienti
}
