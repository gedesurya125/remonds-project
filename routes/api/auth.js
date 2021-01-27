const express = require('express');
const router = express.Router();

//@router get api/auth

router.get('/', (req, res) => res.send('API Auth'));

//export routernya
module.exports = router;