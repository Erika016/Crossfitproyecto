const express = require('express');
const router = express.Router();
const controlador = require('../controllers/classControllers');
const { verifyToken } = require("../lib/utils");


//Add extra classes
//Añadir clases extras
router.post('/addClass', verifyToken,controlador.addClass);


//Add classes to the day
//Añadir clases al día
router.post('/addHoursClass', verifyToken,controlador.addHoursClass);

//Show day classes
//Mostrar clases día
router.get('/classOneDay/:dia', verifyToken,controlador.classOneDay);

//Show reservations according to time
//Mostrar reservas según la hora
router.get('/allReserves/:id_schedule', verifyToken,controlador.allReserves);

//Add classes to the day
//Añadir clases al día
router.post('/addReserv', verifyToken,controlador.addReserv);

//Add extra classes
//Añadir clases extras
router.post('/removeClass', verifyToken,controlador.removeClass);

//Añadir clases al día
router.post('/deleteReserv', verifyToken,controlador.deleteReserv);

//Add classes to the day
//listar clases del usuario en un día
router.get('/allReserverUserDay/:fechaHorario/:UID', verifyToken,controlador.allReserverUserDay);

//Remove a class
//Eliminar una clase
router.delete('/deleteClass/:idHorario', verifyToken,controlador.deleteClass);

//Add classes to the day
//Añadir clases al día
router.put('/updatePerClass', verifyToken,controlador.updatePerClass);





module.exports = router;