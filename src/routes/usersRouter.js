const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

// Middlewares
const {uploadAvatar} = require('../middlewares/multerMiddleware');
const {validateRegister} = require('../middlewares/validationsMiddleware');
const userGuestMiddleware = require('../middlewares/userGuestMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');

// Formulario de registro
router.get('/register', userGuestMiddleware, usersController.register);
router.post('/register', uploadAvatar.single('avatar'), validateRegister, usersController.processRegister);

router.get('/editprofile', usersController.edit);
router.post('/editprofile');

// Formulario de login
router.get('/login', userGuestMiddleware, usersController.login);
router.post('/login', usersController.loginProcess);
router.get('/logout', usersController.logout);

// Página de perfil
router.get('/profile', userLoggedMiddleware, usersController.profile);





module.exports = router;