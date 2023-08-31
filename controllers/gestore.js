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


// GET '/gestore'
// const show_gestori = (req, res) => {

//     //find the specific ingrediente with that name
//     Gestori.find({ }, (err, data) => {
//         if (err || !data) {
//             return res.status(400).json({ message: "Ingredienti not present." });
//         }
//         else return res.status(200).json(data); //return the ingredienti objects if found
//     });
// }

module.exports = { 
    get_gestore,
    // show_gestori
}
