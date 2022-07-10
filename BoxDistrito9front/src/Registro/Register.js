
// Component in charge of registering new users.
// Componente encargado del registro de nuevos usuarios.

import classes from "./Register.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../store/loginSlice";
import { Spinner } from "../components/spinner/Spinner";
import { Alert } from "../components/alert/Alert";

export const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);

  const [formValues, setFormValues] = useState({
    name: "",
    last_name: "",
    birth_date: "",
    phone: "",
    email: "",
    sessions: "",
    photo: "",
    rol: "basic",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //Submit data
  // Enviar datos
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUser(formValues)).then(() => {
      setFormValues({
        name: "",
        last_name: "",
        birth_date: "",
        phone: "",
        email: "",
        sessions: "",
        photo: "",
        rol: "basic",
        password: "",
      });
    });

  };

  return (
    <div className={classes.contenedor}>
      {loading && <Spinner />}
      {status === "succeeded" && <Alert message="Registro correcto" />}
      {status === "failed" && <Alert message="Error en el registro" />}
      <div className={classes.datos}>
        <h1>BOX DISTRITO9</h1>
        <h2>Registrarse</h2>
        <form onSubmit={handleOnSubmit}>
          <div className={classes.columna}>
            <div className={classes.primero}>
              <label htmlFor="first_name">Name</label>
              <input
                id="name"
                className={classes.Name}
                type="text"
                name="name"
                value={formValues.name}
                placeholder="Name"
                required
                onChange={handleInputChange}
              />
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                className={classes.lastName}
                type="text"
                name="last_name"
                value={formValues.last_name}
                placeholder="Last Name"
                required
                onChange={handleInputChange}
              />
              <label htmlFor="birth_date">Birth Date</label>
              <input
                className={classes.birth}
                id="birth_date"
                type="date"
                name="birth_date"
                placeholder="Birth Date"
                required
                onChange={handleInputChange}
                value={formValues.birth_date}
              />
              <label htmlFor="phone">Phone</label>
              <input
                className={classes.phone}
                id="phone"
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleInputChange}
                value={formValues.phone}
              />
            </div>
            <div className={classes.segundo}>
              <label htmlFor="email">Email</label>
              <input
                className={classes.email}
                id="email"
                type="email"
                name="email"
                value={formValues.email}
                placeholder="Email"
                required
                onChange={handleInputChange}
              />

              <label htmlFor="sessions">sessions</label>
              <input
                className={classes.sessions}
                id="sessions"
                type="text"
                name="sessions"
                placeholder="sessions"
                required
                onChange={handleInputChange}
                value={formValues.sessions}
              />
              <label htmlFor="photo">Photo</label>
              <input
                className={classes.photo}
                id="photo"
                type="file"
                name="photo"
                placeholder="Photo"
                onChange={handleInputChange}
                value={formValues.photo}
              />
              <label htmlFor="password">Password</label>
              <input
                className={classes.password}
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
            <button className={classes.button} type="submit">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
