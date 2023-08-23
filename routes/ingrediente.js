const express = require('express');
const router = express.Router();
const ingr_ctrl = require('../controllers/ingrediente');

const multer = require('multer');
const upload = multer();

router.delete('/ingrediente/:nome', ingr_ctrl.delete_ingrediente);
router.get('/ingrediente', ingr_ctrl.show_Ingredienti);
router.get('/ingrediente/:nome', ingr_ctrl.show_Prezzo);
router.post('/ingrediente', upload.none(), ingr_ctrl.add_ingrediente);
router.patch('/ingrediente', upload.none(), ingr_ctrl.edit_prezzo_ingrediente);

module.exports = router;