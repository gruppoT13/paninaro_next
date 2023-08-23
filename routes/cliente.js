const express = require('express');
const cl_ctrl = require('../controllers/cliente');
const router_1 = express.Router();

const multer = require('multer');
const upload = multer();

router_1.delete('/cliente/:nr_conto', cl_ctrl.delete_cliente);
router_1.get('/cliente', cl_ctrl.show_Clienti);
router_1.get('/cliente/:nr_conto', cl_ctrl.show_Conto);
router_1.post('/cliente', upload.none(), cl_ctrl.add_cliente);
router_1.patch('/cliente', upload.none(), cl_ctrl.edit_conto_cliente);

module.exports = router_1;