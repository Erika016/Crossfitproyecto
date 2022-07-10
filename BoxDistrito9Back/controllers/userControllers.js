const dbMysql = require("../database/db");
const bcrypt = require("bcryptjs");

/**
 * @class UserController
 */

class UserController {
  /**
   * Function to insert a new user
   * Función para insertar un nuevo usuario
   *
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

   async insertUser(req, res) {
    console.log(req.body)
    const name = req.body.name;
    const last_name = req.body.last_name;
    const birth_date = req.body.birth_date;
    const phone = req.body.phone;
    const email = req.body.email;
    const sessions = req.body.sessions;
    const photo = req.body.photo;
    const rol = req.body.rol;
    const password  = await bcrypt.hash(req.body.password, 10);
     dbMysql.query(
      "INSERT INTO users (name, last_name, birth_date, phone, email, sessions, photo, rol, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, last_name, birth_date, phone, email, sessions, photo, rol, password],
      (error, rows) => {
        if (error){
        res.json({
            status: "failed",
            data: rows,
            error: error.message,
          })
        };
        console.log(rows)
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }

  /**
   *Function to modify a user
   *Función para modificar un usuario.
   *
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  updateUser(req, res) {
    console.log("req", req.body);
    const { id_User } = req.body;
    const { name } = req.body;
    const { last_name } = req.body;
    const { phone } = req.body;
    const { email } = req.body;
    const { sessions } = req.body;
    const { photo } = req.body;
    const { rol } = req.body;
    const { password } = req.body;
    dbMysql.query(
      "UPDATE users SET name = ?, last_name = ?, phone = ?,email = ?, sessions = ?, photo = ?, rol = ?, password = ? WHERE id_User = ?",
      [name, last_name, phone, email, sessions, photo, rol, password, id_User],
      (error, rows) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }

  /**
   * Function to change a user's photo
   *Función para cambiar la foto de un usuario
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  updatePhotoUser(req, res) {
    const { id_User } = req.params;
    const photo = req.body.photoUrl;
    db.query(
      "UPDATE users SET photo = ? WHERE id_User = ?",
      [photo, id_User],
      (error, rows) => {
        if (error) console.log(error);
        res.send("Okay!");
      }
    );
  }

  /**
   * Function to obtain the data of a user
   * Función para obtener los datos de un usuario.
   *
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  userProfile(req, res) {
    const { id_User } = req.params;
    dbMysql.query(
      "SELECT * FROM users WHERE id_User = ?",
      [id_User],
      (err, rows) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }

  /**
   * Function to get all users
   *
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  allUser(req, res) {
    dbMysql.query("SELECT * FROM users ORDER BY name", (error, rows) => {
      if (error)
        console.log({
          status: "failed",
          data: rows,
          error: error.message,
        });
      res.json({
        status: "succedeed",
        data: rows,
        error: null,
      });
    });
  }

  /**
   * Function to search the role of a user
   * Función para buscar el rol de un usuario.
   *
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  rolUsu(req, res) {
    const { id_User } = req.params;
    dbMysql.query(
      "SELECT rol FROM users WHERE id_User = ?",
      [id_User],
      (error, rows) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }

  /**
   * Function to search users by name
   * Función para buscar usuarios por nombre
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  searchUser(req, res) {
    const termino = `${req.params.termino}%`;
    console.log(termino);
    dbMysql.query(
      "SELECT * FROM users where name LIKE ?",
      [termino],
      (error, rows, next) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }

  /**
   * Function to change the user's situation
   * Function to change the user's situation
   *
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  changeSituation(req, res) {
    const { id_User } = req.body;
    const { situation } = req.body;
    dbMysql.query(
      "UPDATE users SET situacion = ? WHERE id_User = ?",
      [situation, id_User],
      (error, rows) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }

  /**
   * Function to change user role
   * Función para cambiar el rol de usuario
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  modifyRolUser(req, res) {
    const { id_User } = req.body;
    const { rol } = req.body;
    dbMysql.query(
      "UPDATE users SET rol = ? WHERE id_User = ?",
      [rol, id_User],
      (error, rows) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }

  /**
   * Function to search an email
   * Función para buscar un correo electrónico
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  searchEmail(req, res) {
    const { email } = req.params;
    dbMysql.query(
      "SELECT * FROM users where email LIKE ?",
      [email],
      (error, rows, next) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }

  /**
   * Functio to change the user's photo
   * Función para cambiar la foto del usuario
   * @param {*} req
   * @param {*} res
   * @memberof UserController
   */

  updatePhoto(req, res) {
    const { id_User } = req.body;
    const { photo } = req.body;
    console.log("esta es la foto que llega aki", photo);
    dbMysql.query(
      "UPDATE users SET photo = ? WHERE id_User = ?",
      [photo, id_User],
      (error, rows) => {
        if (error)
          console.log({
            status: "failed",
            data: rows,
            error: error.message,
          });
        res.json({
          status: "succedeed",
          data: rows,
          error: null,
        });
      }
    );
  }
}

module.exports = UserController = new UserController();
