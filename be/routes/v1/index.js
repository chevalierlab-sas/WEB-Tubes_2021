const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to api v1',
        version: 1
    })
})

module.exports = router;

