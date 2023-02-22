const express = require('express');
const router = express.Router();

router.post('/register', require('./../controller/auth/register').handleRegister);
router.post('/login', require('./../controller/auth/login').handleLogin);
router.post('/newContact', require('./../controller/newContact').handleNewContact);
router.post('/contacts', require('./../controller/deleteContact').handleDelete);

module.exports = { router }

