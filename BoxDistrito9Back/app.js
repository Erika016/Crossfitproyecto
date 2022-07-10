// Desde App.js voy a exportar todas las const y las rutas que voy a utilizar con frecuencia en el proyecto de Back_End
// From App.js I am going to export all the consts that I am going to use frequently in the Back_End project

// lineas 5.6.7 son pruebas
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { verifyRefreshToken, generateToken } = require("../lib/utils");

const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

//modulos que voy a requerir para las rutas
// modules that I will require for the routes

const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const classRouter = require("./routes/classRouter");
const exercisesRouter = require("./routes/exercisesRouter");


const app = express();

// app.get("/api/login", (req, res) => {
//     console.log('entro al get')
//     const user = {
//       name: "Rosa",
//       email: "rosa@gmail.com",
//       id: 100,
//     };

//     jwt.sign({user}, 'secretKey', (err, token) => {
//       res.json({
//         name: 'Rosa',
//         token,
//       });
//     });
//   });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//rutas a seguir por el controlador
//routes to be followed by the controller

app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/class", classRouter);
app.use("/exercises", exercisesRouter);




module.exports = app;
