import classes from "./AddWeigth.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ExercisesList } from "./ExercisesList";

//Mostrar los pesos con ese usuario e id del ejercicio
//Show the weights with that user and exercise id

export const AddWeigth = () => {


 const [searchStatus, setSearchStatus] = useState({
  hasExercises: false
})  
const [exercises, setExercises] = useState([]);

var arrayExercises = [
  {
    id_exercise: 0,
    name: "",
    description: ""
}
]; 

  const getExercises = (e) => {
    if(e && e !== ''){
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
          setSearchStatus ({
            hasExercises: false
          }) 
        }
      });
    } else {
      setSearchStatus ({
        hasExercises: false
      }) 
    }
  };

  const [formValues, setFormValues] = useState({
    name: "",
    weigth: "",
    date: "",
  });
  
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //Submit data
  // Enviar datos
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/exercises/addWeight", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={classes.contenedor}>
      <div className={classes.datos}>
        <h1>Box Distrito9</h1>
        <h2>Pesos Registrados</h2>
{/* Buscador de ejercicios */}
          <div className={classes.columna}>
            <h1>Buscar ejercicio</h1>
            <input
              className={classes.Name}
              placeholder="Escriba aquí el ejercicio"
              required
              onChange={(event) => getExercises(event.target.value)}
            />
            <div>
            {arrayExercises.length > 0 && searchStatus.hasExercises && <ExercisesList exercises={exercises}/>}
            </div>
          </div>
          {/* <div className={classes.button}>
            <button onClick={getExercises(valueNameExercises)}>Buscar</button>
          </div> */}



        <form onSubmit={handleOnSubmit}>
          <div className={classes.columna}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className={classes.Name}
              type="text"
              name="name"
              value={formValues.name}
              placeholder="Name"
              required
              onChange={handleInputChange}
            />
            {/* <label htmlFor="description">Descripcion</label>
            <input
              id="description"
              className={classes.descripcion}
              type="text"
              name="descrption"
              value={formValues.description}
              placeholder="Descripcion"
              required
              onChange={handleInputChange}
            /> */}
             <label htmlFor="weigth">Pesos</label>
            <input
              id="weigth"
              className={classes.weigth}
              type="int"
              name="weigth"
              placeholder="Peso registrado"
              required
              onChange={handleInputChange}
              value={formValues.weigth}
            />
            <label htmlFor="date">Fecha</label>
            <input
              id="date"
              className={classes.date}
              type="date"
              name="date"
              placeholder="date"
              onChange={handleInputChange}
              value={formValues.date}
            />
          </div>
          <div className={classes.button}>
            <button type="submit">Insertar</button>
          </div>
        </form>
      </div>
      <li><Link to="/dashboard">Volver</Link></li>
    </div>
  );
};
