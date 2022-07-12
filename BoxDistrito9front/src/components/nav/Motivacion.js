// Componente en el que se le muestra una pequeña introducción de lo que ofecen en Box Distrito9.
// Component that shows a small introduction of what they offer in Box Distrito9.

import classes from "./Motivacion.module.css";
import box from "../info/imagenInfo/fondo.JPG";


export function Motivacion(props) {
  return (
    <div className={classes.container}>
      <div className={classes.textLimit}>
        <h1>¿Quienes somos?</h1>
      </div>
      <div className={classes.textExplain}>
        <p>
          {" "}
          Somos un centro deportivo especializado en CROSSFIT y ejercicios
          funcionales adaptados a todos los niveles SIN LÍMITE de edad.
          <br />
          Llevamos desde 2017 dando clases y preparando atletas para presentarse
          a oposiciones.
          <br />
          Como novedad, tenemos clases de Boxeo los MARTES y JUEVES a las
          21:30pm, y Fisioterapeuta Especialidad Deportiva (cita previa).
        </p>
      </div>
      <div className={classes.textLimit}>
        <h1>El Box</h1>
      </div>
      <div className={classes.boxContainer}>
      <div className={classes.textExplain}>
      <p>
          El Box es como se llama al lugar donde entrenamos, pero no es solo eso, es un sitio para divertirse, compartir esfuerzos y conocer gente que comparte tu pasión.
          <br />
          Nuestras instalaciones cuentan con el espacio suficiente para que cada alumno entrene agusto, sin presiones y con total seguridad.
        </p>
      </div>
      <div className={classes.imageBox}>
      <img className={classes.imagen} alt="test" src={box} />
      </div>
      </div>
      <div className={classes.textLimit}>
        <h1>EL LÍMITE LO PONES TÚ.</h1>
      </div>
      <div className={classes.secundaryText}>
        <h3>
          Prueba nuestra primera clase gratuita reservandola en el teléfono 661
          554 273
        </h3>
        <h3>VEN Y NO LO PIENSES MÁS!!!</h3>
      </div>
    </div>
  );
}
