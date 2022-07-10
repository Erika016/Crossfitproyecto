// component that shows the footer of the application
// componente que muestra el pie de pagina de la aplicacion

import { Fragment } from "react";
import classes from "./Footer.module.css";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

export function Footer() {
  return (
    <Fragment>
      <div className={classes.footer}>
      <div className={classes.direccion}>
        <label>Dirección</label>
        <p>
          Calle Felipe Gonzalez Vallejo, 6, <br></br> 29591 Campanillas, Málaga,España
        </p>
        </div>
       
        <p className={classes.nombre}>BOX DISTRITO9</p>
        <div>
        <label  className={classes.reservas}>Teléfono de reservas</label>
        <p>661554273</p>
        </div>
      
      <div>
    
        <div className={classes.redes}>
          <div className={classes.face}><ImFacebook2 /></div>
          <div className={classes.insta}><ImInstagram/></div>
          <div className={classes.what}><ImWhatsapp/></div>
        </div>
      </div>
      </div>
    </Fragment>
  );
}

