const express = require('express');
const router = express.Router();
const controlador = require('../controllers/loginController');

// realizar el login
router.post('/login', controlador.login);

module.exports = router;