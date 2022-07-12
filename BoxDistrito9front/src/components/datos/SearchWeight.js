import classes from "./SearchWeight.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ExercisesList } from "./ExercisesList";
import { DefaultMessage } from "../commons/DefaultMessage";

//Mostrar los pesos con ese usuario e id del ejercicio
//Show the weights with that user and exercise id

export const SearchWeight = () => {


 const [searchStatus, setSearchStatus] = useState({
  hasExercises: false
})  
const [exercises, setExercises] = useState([]);

const [inputValue, setValue] = useState('');

var arrayExercises = [
  {
    id_exercise: 0,
    name: "",
    description: ""
}
]; 
  const getExercises = (e) => {
    if(e && e !== ''){
      setValue(e);
    fetch("http://localhost:8000/exercises/searchExercises/"+ e, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data.length > 0){
          arrayExercises = data.data; 
          setExercises(arrayExercises)
          setSearchStatus ({
            hasExercises: true
          })
        } else {
          arrayExercises = [];
          setExercises(arrayExercises)
          setSearchStatus ({
            hasExercises: false
          }) 
        }
      });
    } else {
      setValue('');
      setSearchStatus ({
        hasExercises: false
      }) 
    }
  };

  return (
    <div className={classes.searchContainer}>
      <div className={classes.formSearch}>
          <div className={classes.searchExer}>
            <div className={classes.titleSearch}>
          <h2>Buscar ejercicios</h2>
          </div>
            <input
              type="text" 
              className={classes.barSearch}
              placeholder="Escriba aquí.."
              required
              onChange={(event) => getExercises(event.target.value)}
            />
            <div className={classes.containerListExercises}>
            {exercises.length > 0 && searchStatus.hasExercises && <ExercisesList exerciseName={inputValue} exercises={exercises}/>}
            {exercises.length === 0 && !searchStatus.hasExercises && inputValue && <DefaultMessage message="No hay resultados de la búsqueda"/>}
            </div>
          </div>
      </div>
      <div className={classes.botonContainer}>
          <Link className={classes.boton} to="/dashboard">Volver</Link>
      </div>
    </div>
  );
};
