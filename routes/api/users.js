const express = require('express');
const router = express.Router();

//@router get api/users

router.get('/', (req, res) => res.send('API users'));

//export routernya
module.exports = router;