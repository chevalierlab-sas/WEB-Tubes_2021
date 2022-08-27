const router = require('express').Router();
const postController = require('../../controller/post.controller')

router.get('/', postController.all)
router.get('/:title', postController.detail)
router.post('/', postController.create)
router.put('/:title', postController.update)
router.delete('/:title', postController.delete)

module.exports = router;