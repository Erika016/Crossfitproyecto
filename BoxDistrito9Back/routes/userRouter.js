const express = require('express');
const router = express.Router();
const controlador = require('../controllers/userControllers');
const { verifyToken } = require("../lib/utils");

//USUARIOS
// USERS

//Insertar nuevo usuario
//Insert new user

router.post('/insertUser', controlador.insertUser);

//Modificar un usuario
//Modify a user

router.put('/updateUser', verifyToken, controlador.updateUser);

//Perfil del usuario
//User profile

router.get('/userProfile/:id_User', controlador.userProfile);

//Mostrar los usuarios
// show users
router.get('/allUser', verifyToken ,controlador.allUser);

//rol del usuario
// user role

router.get('/rolUsu/:id_User', verifyToken ,controlador.rolUsu);

//Busqueda de usuarios
//Search for users

router.get('/searchUser/:termino', verifyToken , controlador.searchUser);

//Cambiar el estado del usuario
//Change user state

router.put('/changeSituation', verifyToken , controlador.changeSituation);

//Modificar rol del usuario
//Modify user role

router.put('/modifyRolUser', verifyToken ,controlador.modifyRolUser);

//Busqueda de usuarios
//Search for users

router.get('/searchEmail/:email', verifyToken , controlador.searchEmail);

//Modificar foto del usuario
//Modify user photo
router.put('/updatePhoto', verifyToken ,controlador.updatePhoto);


module.exports = router;