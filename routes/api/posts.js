const express = require('express');
const router = express.Router();

//@router get api/posts

router.get('/', (req, res) => res.send('API Posts'));

//export routernya
module.exports = router;