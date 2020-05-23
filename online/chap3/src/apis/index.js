const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Helo everybody!!!! hahahaha');
});

router.use('/post', require('./postApi'));

module.exports = router;