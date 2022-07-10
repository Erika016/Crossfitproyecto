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
