const express = require('express');
const router = express.Router();

//@router get api/profiles

router.get('/', (req, res) => res.send('API profile'));

//export routernya
module.exports = router;