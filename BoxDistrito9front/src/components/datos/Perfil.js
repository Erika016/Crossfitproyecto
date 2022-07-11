// Component to update the profile data of the registered user.
// Componente para actualizar los datos del perfil del usuario registrado.

import classes from "./Perfil.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/loginSlice";
import { Navigate } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";

export const Perfil = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  // console.log(user);
  const loading = useSelector((state) => state.login.login.loading);
  const logged = useSelector((state) => state.login.login.isLogged);

  const [formValues, setFormValues] = useState({
    id_User: user.info.id_User,
    name: user.info.name,
    last_name: user.info.last_name,
    birth_date: user.info.birth_date,
    phone: user.info.phone,
    email: user.info.email,
    sessions: user.info.sessions,
    rol: "basic",
    password: user.info.password,
    mi_perfil: [],
    token: user.token,
    refresh_token: user.refresh_token,
  });

  const handleInputChange = (e) => {
    // console.log(e.target.selectedOptions);
    if (e.target.email === "mi_perfil") {
      let value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormValues((prev) => ({ ...prev, [e.target.name]: value }));
    } else {
      setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    dispatch(updateUser(formValues)).then((result) => {
      // console.log(result);
      setFormValues({
        id_User: result.payload.data.id_User,
        name: result.payload.data.name,
        last_name: result.payload.data.last_name,
        birth_date: result.payload.data.birth_date,
        phone: result.payload.data.phone,
        email: result.payload.data.email,
        sessions: result.payload.data.sessions,
        rol: "basic",
        password: result.payload.data.password,
        mi_perfil: [],
        token: result.payload.data.token,
        refresh_token: result.payload.data.refresh_token,
      });
    });
  };
  // if (!user) {
  //   return (
  //            console.log("Cargando")
  //       );
  // }

  return (
    <div className={classes.contenedor}>
      {(!logged || !user) && <Navigate to="/login" replace={true} />}
      {loading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      {!loading && user && (
        <div className={classes.datos}>
          {/* <h1>BOX DISTRITO9</h1> */}
          <h2 className={classes.titulo}>Actualizar Perfil</h2>
          <form onSubmit={handleOnSubmit}>
            <div className={classes.columna}>
              <div className={classes.primero}>
                <label className={classes.label} htmlFor="first_name">Nombre</label>
                <input
                  id="name"
                  className={classes.user}
                  type="text"
                  name="name"
                  value={formValues.name}
                  placeholder="Name"
                  required
                  onChange={handleInputChange}
                />
                <label className={classes.label} htmlFor="last_name">Apellidos</label>
                <input
                  id="last_name"
                  className={classes.user}
                  type="text"
                  name="last_name"
                  value={formValues.last_name}
                  placeholder="Last Name"
                  required
                  onChange={handleInputChange}
                />
                <label className={classes.label} htmlFor="birth_date">Fecha Nacimiento</label>
                <input
                  className={classes.user}
                  id="birth_date"
                  type="date"
                  name="birth_date"
                  placeholder="Birth Date"
                  required
                  onChange={handleInputChange}
                  value={formValues.birth_date}
                />
                <label className={classes.label} htmlFor="phone">Teléfono</label>
                <input
                  className={classes.user}
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
              </div>
              <div className={classes.segundo}>
                <label className={classes.label} htmlFor="email">Email</label>
                <input
                  className={classes.user}
                  id="email"
                  type="email"
                  name="email"
                  value={formValues.email}
                  placeholder="Email"
                  required
                  onChange={handleInputChange}
                />

                <label className={classes.label} htmlFor="sessions">Sesiones</label>
                <input
                  className={classes.user}
                  id="sessions"
                  type="text"
                  name="sessions"
                  placeholder="sessions"
                  required
                  onChange={handleInputChange}
                  value={formValues.sessions}
                />
                <label className={classes.label} htmlFor="photo">Foto</label>
                <input
                  className={classes.user}
                  id="photo"
                  type="file"
                  name="photo"
                  placeholder="Photo"
                  onChange={handleInputChange}
                  value={formValues.photo}
                />
                <label className={classes.label} htmlFor="password">Contraseña</label>
                <input
                  className={classes.user}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleInputChange}
                  value={formValues.password}
                />
              </div>
            </div>
            <div>
              <button
                className={classes.button}
                type="submit"
                onClick={handleOnSubmit}
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
