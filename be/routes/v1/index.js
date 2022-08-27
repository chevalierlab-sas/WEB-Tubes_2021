const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to api v1',
        version: 1
    })
})

router.use('/posts', require('./post.routes'))

module.exports = router;

