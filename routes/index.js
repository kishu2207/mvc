var express = require('express');
var router = express.Router();
var user = require('../controler/usercontroller');

router.post('/', user.insert);
router.get('/', user.getdata);
router.get('/update_data/:id', user.get_data_update);
router.post('/update/:id', user.data_update);
router.get('/delete/:id', user.data_delete);


module.exports = router;
