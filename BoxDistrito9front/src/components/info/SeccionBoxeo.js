import classes from "./SeccionBoxeo.module.css";
import boxeo1 from "../info/imagenInfo/boxeo1.jpg";
import { Link } from "react-router-dom";

// En este componente encontramos una pequeña descripción de lo que es el CROSSFIT, sus beneficios y los malos mitos sobre este entrenamiento.
// In this component we find a short description of what CROSSFIT is, its benefits and the bad myths about this training.
export function SeccionBoxeo() {
  return (
      <div className={classes.container}>
          <h1 className={classes.nombre}>BOX DISTRITO 9 </h1>
        <h2 className={classes.titulo}>BOXEO</h2>
        <div>
          <h3 className={classes.principal}>¿Que os ofrecemos en las clases de BOXEO de BOX DISTRITO9?</h3>
          <p>
            Las clases de Boxeo, estan orientadas a la tecnica de este deporte
            poco practicado y muy beneficioso para la salud. En los
            entrenamientos de Boxeo impartidos por nuestro Coach Juan, campeon
            de españa en varias ocasiones. Puedes aprender todas las reglas,
            pasos y estrategias y tambien hacer muchísimos ejercicios de cardio
            que ayuda a mantener un estado de forma espectatular. Sin límite de
            edad.
          </p>
          <img className={classes.imagen} alt="test" src={boxeo1} />
        </div>
        <div >
          <h3 className={classes.principal}>¿Que es el Boxeo</h3>
          <p>
            El boxeo es un deporte de combate en el cual 2 personas pelean solo
            usando sus puños, sin usos de sus piernas. Los golpes son de la
            cintura hacia arriba, ya que estas son las medidas exigidas por la
            liga deportiva de boxeo.
          </p>
        </div>
        <div >
          <h3 className={classes.principal}>Lo 5 mejores beneficios que tiene practicar Boxeo</h3>
         
            <li> Ayuda a perder peso. ...</li>
            <li>Pone en forma todos los músculos del cuerpo. ...</li>
            <li>Reduce el estrés. ...</li>
            <li>Mejora la concentración. ...</li>
            <li>Aumenta la confianza en uno mismo. ...</li>

        </div>

        <div>
          <h3 className={classes.principal}>Consejos antes de practicarlo</h3>
          <p>
            Como en todos los deportes, cuando se decide iniciar una rutina, lo
            ideal es contar con la experiencia y supervisión de un profesional
            que controle y vigile la manera en la que se realizan los
            ejercicios. Lo necesario para comenzar a practicarlo es encontrarse
            en un buen estado de salud y con muchas ganas de pasarlo bien. Los
            entrenadores adaptan los ejercicios dependiendo del nivel de cada
            persona. “El boxeo, tal y como lo entendemos en BOX DISTRITO 9, es
            una disciplina deportiva sin contacto, si bien los clientes con más
            nivel pueden practicar lo aprendido en clase, supervisados en todo
            momento por el Coach.
          </p>
        </div>

        <div>
          <h3 className={classes.principal}>Horarios de Boxeo</h3>
          <p>
            Las clases de boxeo son los MARTES y JUEVES a las 21:30PM. Las
            reservas de la clase se hace por Whatsapp en el teléfono 661 55 42
            73
          </p>
          <Link className={classes.boton} to="/">Volver a Inicio</Link>
        </div>
      </div>
  );
}
