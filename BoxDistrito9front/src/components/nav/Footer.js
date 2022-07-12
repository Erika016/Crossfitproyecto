// component that shows the footer of the application
// componente que muestra el pie de pagina de la aplicacion

import { Fragment } from "react";
import classes from "./Footer.module.css";


export function Footer() {
  return (
    <Fragment>
      <div className={classes.footer}>
      <div className={classes.directionInfo}>
        <label>Dirección</label>
        <p>
          Calle Felipe Gonzalez Vallejo, 6, <br></br> 29591 Campanillas, Málaga,España
        </p>
      </div>
       <div className={classes.nameBoxContainer}>
        <p className={classes.nameBox}>BOX DISTRITO9</p>
        </div>
        <div className={classes.reservasBookings}>
        <label>Contactos:</label><br/>
        <label>Teléfono de reservas</label>
        <p>661554273</p>
        <label>Whatsapp</label>
        <p>661554273</p>
        </div>
      </div>
    </Fragment>
  );
}

