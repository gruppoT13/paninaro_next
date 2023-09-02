const Gestori = require('../models/gestore');

// POST '/gestore'
const get_gestore = (req, res) => {
    let input_admin = String(req.body.admin);
    let input_password = String(req.body.password);
    Gestori.find({admin: input_admin, password: input_password}, (err, data) => {
        
        if (err || !data || JSON.stringify(data)=="[]") { 
            return res.status(401).send("Unauthorized");
        }
        else{
            return res.status(200).send(data); //return the gestore objects if found
        }
    });
};

module.exports = { 
    get_gestore
}
