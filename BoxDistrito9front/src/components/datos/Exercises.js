
// Component that shows all the exercises registered in the database and their description.
// Componente que muestra todos los ejercicios registrados en la base de datos y su descripción.

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Exercises.module.css";

//Mostrar ejercicios
//Show exercises
export function Exercises(props) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/exercises//allExercises")
      .then((res) => res.json())
      .then((data) => setExercises(data.data));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.bloque}>
        {exercises.map((exercise) => {
          return (
            <li className={classes.li} key={exercise.id_exercise}>
              <p className={classes.nombre}>{exercise.name}</p>
              <p className={classes.descripcion}>{exercise.description}</p>
            </li>
          );
        })}
      
          <Link className={classes.boton} to="/dashboard">Volver</Link>
      </div>
    </div>
  );
}
