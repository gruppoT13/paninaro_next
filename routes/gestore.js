const express = require('express');
const ges_ctrl = require('../controllers/gestore');
const router_2 = express.Router();

const multer = require('multer');
const upload = multer();

router_2.post('/gestore', upload.none(), ges_ctrl.get_gestore);
// router_2.get('/gestore', ges_ctrl.show_gestori);

module.exports = router_2;