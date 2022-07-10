// En este componente encontramos una pequeña descripción de lo que es el CROSSFIT, sus benefi
// En este componente encontramos una pequeña descripción de lo que es el CROSSFIT, sus beneficios

import classes from "./SeccionCrossfit.module.css";
import Rosa from "../info/imagenInfo/Rosa.JPG"
import { Link } from "react-router-dom";

export function SeccionCrossfit() {
  return (
      <div className={classes.container}>
        <h1 className={classes.nombre}>BOX DISTRITO 9 </h1>
        <h2 className={classes.titulo}>CROSSFIT</h2>
        <div>
            
            <h3 className={classes.principal}>¿Que os ofrecemos en BOX DISTRITO9?</h3>
            <p>En Distrito9, os ofrecemos la posibilidad de entrenar en las mejores instalaciones que encontraréis en toda Málaga,
                con todos los ejercicios adaptados a todas las necesidades físicas de cada persona. No es necesario haber hecho ejercicios antes de empezar a entrenar, cualquier momento es bueno para empezar, y además en Box Distrito9 adaptamos todos los ejercicios y pesos a cada persona.
                En estos momentos tenemos de coach a Rosa Vázquez. Campeona de España en varias modalidades, como halterofilia, Powerlifting y máster -48Kg, consiguiendo récords de España.
                 </p>
                 <img
          className={classes.imagen}
          alt="test"
          src={Rosa}
        />
        </div>
        <div>
          <h3 className={classes.principal}>¿Que es el Crosstit?</h3>
          <p>
            El CrossFit es un sistema de acondicionamiento físico basado en
            ejercicios constantemente variados, con movimientos funcionales,
            ejecutados a alta intensidad.
          </p>
          </div>
          <div>
          <h3 className={classes.principal}>¿Cuàles son los ejercicios de CrossFit para ponerte fuerte?</h3>
          
            <li>AIR SQUATS O SENTADILLAS. up.fitnessclub. ...</li>
            <li>FRONT SQUAT O SENTADILLA FRONTAL. courage1.0. ...</li>
            <li>DEADLIFT O PESO MUERTO. giada.gambino_ ...</li>
            <li>SHOULDER PRESS O EMPUJE HOMBROS. joaoerlacher. ...</li>
            <li>PUSH PRESS O EMPUJE DE PECHO. ...</li>
            <li>PUSH UPS O FLEXIONES. ...</li>
            <li>PULL UPS O DOMINADAS. ...</li>
            <li>BOX JUMPS.</li>
          
        </div>
        <div>
          <h3 className={classes.principal}>Los 7 beneficios de hacer Crossfit</h3>
          
            <li> Ayuda a eliminar grasa. ...</li>
            <li>Hacer crossfit ayuda a implementar nuestra resistencia. ...</li>
            <li> Hacer crossfit aumenta tu musculatura. ...</li>
            <li> Hacer crossfit no es rutinario. ...</li>
            <li> Permite obtener resultados en poco tiempo. ...</li>
            <li> Contribuye a estilizar nuestra figura.</li>
        
        </div>
        <div>
          <h3 className={classes.principal}>Mitos DESMENTIDOS</h3>
          
            <li>Las chicas que hacen CrossFit se vuelven grandes.</li>
            <li>El CrossFit es lesivo.</li>
            <li>
              El CrossFit no es la mejor opción si quieres ganar músculo o
              volumen.
            </li>
            <li>El CrossFit no es para todos.</li>
            <li>Necesito ponerme en forma para empezar en CrossFit.</li>
            <li>El CrossFit es demasiado caro.</li>
          
        </div>
        <div>
          <h3 className={classes.nota}>Nota importante:</h3>
          <p className={classes.nota}>
            Todos los ejercicios se adaptan a la persona, según su físico y sus
            necesidades-
          </p>
          <h2>No tienes más excusas!!!</h2>
        </div>
        <Link className={classes.boton} to="/">Volver a Inicio</Link>
      </div>
  );
}

