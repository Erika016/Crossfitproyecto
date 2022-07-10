const dbMysql = require("../database/db");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../lib/utils");
const bcrypt = require("bcryptjs");


/**
 * @class LoginController
 */

class LoginController {

    /**
   * Function to show all exercises
   * Funcion para mostrar todos los ejercicios
   *
   * @param {*} req
   * @param {*} res
   * @memberof LoginController
   */

     login(req, res) {
    const pass = `${req.body.password}`;
    const email = `${req.body.email}`;
    console.log(email);
      dbMysql.query("SELECT * FROM users where email LIKE ?",
      [email], (error, rows) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
          if (rows.length > 0) {
            bcrypt.compare(
              pass,
              rows[0].password,
              (error, response) => {
                if (error) {
                  res.status(500).json({ message: error.message });
                } else if (response) {
                  console.log(rows[0])
                  res.status(200).json({
                    status: "success",
                    token: generateToken(rows, false),
                    refresh_token: generateToken(rows, true),
                    userId: rows.id_User,
                    info: rows[0],
                    error: error || null,
                    id_user: rows[0].id_User
                  });
                } else {
                  res
                    .status(200)
                    .json({ message: "incorrect username or password" });
                }
              }
            );
          } else {
            res
              .status(200)
              .json({ message: "incorrect username or password" });
          }
      });
    }
}

module.exports = LoginController = new LoginController();
