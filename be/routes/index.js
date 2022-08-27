var express = require('express');
import { getUsers, Register, Login, Logout } from '../controllers/Users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
var router = express.Router();

/* GET home page. */
router.get('/', getUsers, function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout',Logout);

module.exports = router;
