// Component that through props generates the 3 cards that appear on the home page.
// Componente que mediante props genera las 3 tarjetas que aparecen en la pagina de inicio.

import classes from "./Cards.module.css";
import { Link } from "react-router-dom"
import { Fragment } from "react";

export function Cards(props) {
  return (
    <Fragment>
      <div className={classes.container}>
        <img alt="test" className={classes.image} src={props.imagenUrl} />
        <div className={classes.containerInformacion}>
        <h1>{props.titulo}</h1>
        <Link className={classes.boton} to={`/${props.seccion}`}>Más info</Link>
        </div>
      </div>
    </Fragment>
  );
}
