// componente que muestra la paginal principal a usuario registrado.
// component that shows the main page to the registered user.

import classes from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "../components/spinner/Spinner";
import { Navigate } from "react-router-dom";
import perfil from "../components/info/imagenInfo/perfil1.jpeg"

export const Dashboard = () => {
  const user = useSelector((state) => state.login.login.data.info);
  const loading = useSelector((state) => state.login.login.loading);
  const logged = useSelector((state) => state.login.login.isLogged);


  return (
    <div className={classes.container}>
      {(!logged || !user) && <Navigate to="/login" replace={true} />}
      {loading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      {!loading && user && (
        <div>
          <h1 className={classes.titulo}>Mi Perfil</h1>
        <div className={classes.profile}>
        
          <img className={classes.photo} alt="test" src={perfil} />

          <div className={classes.dates}>
            <p>
              <b>Nombre: </b> {user.name}{" "}
            </p>
            <p>
              <b>Apellidos:</b> {user.last_name}
            </p>
            <p>
              <b>Fecha de nacimiento:</b> {user.birth_date}
            </p>
            <p>
              <b>Teléfono:</b> {user.phone}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Nº Sesiones:</b> {user.sessions}
            </p>
          </div>

          <div>
            <div>
              <Link className={classes.buttons} to={"/perfil"}>
                Actualizar Perfil
              </Link>
            </div>
            <div>
              <Link className={classes.buttons} to={"/searchWeight"}>
                Registrar Pesos Ejercicios
              </Link>
            </div>
            <div>
              <Link className={classes.buttons} to={"/exercises"}>
                Ejercicios
              </Link>

            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};


