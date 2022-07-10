// In this component we find a short description of the activity of imparting the physiotherapist center
// En este componente encontramos una pequeña descripción de la actividad de impartir el centro de fisioterapeuta

import fisio1 from "../info/imagenInfo/fisio1.jpg";
import classes from "./SeccionFisio.module.css";
import { Link } from "react-router-dom";


function SeccionFisio() {
  return (
        <div className={classes.container}>
          <h1 className={classes.nombre}>BOX DISTRITO 9 </h1>
          <h2 className={classes.titulo}>FisioTerapia MMuñoz</h2>
          <p>
            En nuestras instalaciones, también disponemos de consulta de
            fisioterapia deportiva. Con nuesta gran profesional María Muñoz.
            Especializada en:
            </p>
            <li>Punsión seca</li>
            <li>Fisioterapia Deportiva</li>
            <li>Electrólisis ecoguiada en lesiones tendinosas</li>
            <li>Y muchas mas...</li>
         
          <img className={classes.imagen} alt="test" src={fisio1} />
          <div>
            <h3 className={classes.titulo}>
              Importante no hay que ir al fisioterapeuta solo por las lessiones,
              también tenemos que ir para prevenirlas.
            </h3>
            <p>
              La fisioterapia deportiva es una rama de la fisioterapia, que va
              dirigida a toda persona que practique deporte habitualmente, tanto
              si es un deporte de base, amateur, de salud, de élite o alto
              rendimiento. La fisioterapia deportiva consiste en hacer un
              trabajo <b>preventivo</b> y otro de recuperación de lesiones.
            </p>
          </div>
          <Link className={classes.boton} to="/">Volver a Inicio</Link>
        </div>
  );
}
export default SeccionFisio;
