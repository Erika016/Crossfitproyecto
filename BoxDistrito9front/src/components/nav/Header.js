// NAVEGADOR CON LOGO Y DIFERENTES LINK QUE TE ENVIA A CADA SECCION
// BROWSER WITH LOGO AND DIFFERENT LINKS THAT SEND YOU TO EACH SECTION
import React from "react";
import logo from "../info/imagenInfo/logo.PNG";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice";
// import { IconName } from "react-icons/fa";
// PARA INSERTAR ICONOS DE REACT SE INSTALA LA LIBRERIA DE ICONOS REACT
// npm install react-icons --save y luego se importan los iconos
// TO INSERT REACT ICONS, INSTALL THE REACT ICON LIBRARY
// npm install react-icons --save and then the icons are imported
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

function Header() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.login.login.isLogged);

  const handleLogOut = () => {
    dispatch(loginActions.logOut());
  };

  return (
    <header className={classes.container}>
      <img
        className={classes.logo}
        // className={classes.logo}
        alt="test"
        src={logo}
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/tarifasHorarios">Tarifa y Horarios</Link>
          </li>
          <li>
            <Link to="/contactolocalizacion">Contacto/Localización</Link>
          </li>
          <li>{!logged && <Link to={"/login"}>Iniciar sesión</Link>}
          {logged && <Link to={"/login"} onClick={handleLogOut}>Cerrar sesión</Link>}</li>

          
          <li>{logged && <Link to={"/dashboard"}>Area Usuario</Link>}</li>

        </ul>
        {/* Esta es solo de prueba despues va solo en dashboar */}
        {/* <Link  to={"/exercises"}>Ejercicios</Link> */}
      </nav>

      <div className={classes.redes}>
        <div className={classes.face}>
          <ImFacebook2 />
        </div>
        <div className={classes.insta}>
          <ImInstagram />
        </div>
        <div className={classes.what}>
          <ImWhatsapp />
        </div>
      </div>
    </header>
  );
}
export default Header;
