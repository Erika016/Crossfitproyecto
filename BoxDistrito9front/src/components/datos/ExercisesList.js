import classes from "./ExercisesList.module.css";
import React, { useState } from "react";
import Moment from "moment";
import { DefaultMessage } from "../commons/DefaultMessage";
import Modal from "react-modal";
import { useSelector } from "react-redux";

// instalar la librería moment:  npm install --save moment react-moment
// instalar el modal:npm install react-modal

// Componente encargado de listar la búsqueda de ejercicios, mostrar los registros guardados y gestionarlos (elimiar o añadir).

export const ExercisesList = (props) => {
  const user = useSelector((state) => state.login.login.data.info);
  var input = props.exerciseName;
  const [inputInitial, setInput] = useState();
  const [selectedExercise, setExercise] = useState({
    hasExerciseSelected: false,
  });
  const [addNewWeight, setAddWeight] = useState({
    isAddWeight: false,
  });
  const [ejercicios, setEjercicios] = useState([]);
  const [exerciseSelectedName, setName] = useState();
  const [exerciseSelected, setExcerciseSelected] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [exerciseDelete, setExerciseDeleteData] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "grey",
      color: "black",
      border: "solid 1px black",
    },
  };
  const id_User = user.id_User;
  var arrayWeightDatas = [];

  // Método que obtiene los datos guardados anterioromente de un ejercicio seleccionado por el ususario.
  const getWeight = (e) => {
    setAddWeight({
      isAddWeight: false,
    });
    setExcerciseSelected(e);
    setInput(input);
    var idExercise = e.id_exercise;
    if (e && e !== "") {
      fetch(
        "http://localhost:8000/exercises/searchWeight/" +
          idExercise +
          "/" +
          id_User,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setExercise({
            hasExerciseSelected: true,
          });
          setName(e.name);
          if (data.data.length > 0) {
            arrayWeightDatas = data.data;
            setEjercicios(arrayWeightDatas);
          } else {
            arrayWeightDatas = [];
            setEjercicios(arrayWeightDatas);
          }
        });
    } else {
      setExercise({
        hasExerciseSelected: false,
      });
    }
  };

  //Método encargado de abrir el modal para la confirmación del borrado de un registro.
  const openModal = (e) => {
    setExerciseDeleteData(e);
    setIsOpen(true);
  };

  //Método encargado de cerrar el modal.

  function closeModal() {
    setIsOpen(false);
  }

  // Método para borrar un registro existente.
  const deleteWeight = (e) => {
    closeModal();
    var idWeight = exerciseDelete.id_weight;
    fetch("http://localhost:8000/exercises/deleteWeight/" + idWeight, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.affectedRows === 1) {
          getWeight(exerciseSelected);
          console.log("se ha borrado correctamente");
        } else {
          console.log("ha habido un error y no se ha borrado correctamente");
        }
      });
  };

  // Método que muestra el campo de añadir un nuevo registro
  const addWeight = () => {
    setAddWeight({
      isAddWeight: true,
    });
  };

  // Inicialización de los valores del formulario
  const [formValues, setFormValues] = useState({
    id_User: id_User,
    id_exercise: 0,
    weight: "",
    date: "",
  });

  // Método que recoge los cambios dentro del formulario
  const handleInputChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Método que envía los datos del nuevo registro a la base de datos
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
        if (data.data.affectedRows === 1) {
          setAddWeight({
            isAddWeight: false,
          });
          getWeight(exerciseSelected);
          console.log("se ha añadidoo correctamente");
          setFormValues({
            id_User: id_User,
            id_exercise: 0,
            weight: "",
            date: "",
          });
        } else {
          console.log("ha habido un error y no se ha añadido correctamente");
        }
      });
  };

  // Formulario para la recogida del nuevo dato a registrar
  function FormAddWeight() {
    formValues.id_exercise = exerciseSelected.id_exercise;
    return (
      <div className={classes.formAddWeightContainer}>
        <div className={classes.formAddWeightTitle}>
          <h2 className={classes.addWeightTitle}>Registrar peso</h2>
        </div>
        <div>
          <form onSubmit={handleOnSubmit}>
            <div className={classes.formAdd}>
              <div>
                <label htmlFor="weight">Peso/Kg:</label>
                <input
                  className={classes.input}
                  id="weight"
                  type="int"
                  name="weight"
                  placeholder="Introduzca peso en Kg"
                  value={formValues.weight}
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="date">Fecha:</label>
                <input
                  id="date"
                  className={classes.input}
                  type="date"
                  name="date"
                  placeholder="Fecha"
                  onChange={handleInputChange}
                  value={formValues.date}
                />
              </div>
              <div>
                <button className={classes.buttonAdd} type="submit">
                  Añadir
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Tabla donde se muestran los registros guardados correspondientes al ejercicio seleccionado
  function ExerciseSelected(exerciseData) {
    return (
      <div className={classes.tablaContainer}>
        <div className={classes.exerciseTitle}>
          <h1>{exerciseSelectedName}</h1>
        </div>
        <div>
          <button className={classes.addButtonAdd} onClick={() => addWeight()}>
            Registrar nuevo peso
          </button>
        </div>
        {ejercicios.length > 0 && (
          <table>
            <thead>
              <tr className={classes.barraTitulos}>
                <th className={classes.tit}>Fecha</th>
                <th className={classes.tit}>Peso</th>
                <th className={classes.tit}>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {exerciseData.exercises.map((exerciseData1) => {
                return (
                  <tr key={exerciseData1.id_weight}>
                    <td className={classes.dat}>
                      {Moment(exerciseData1.date).format("DD-MM-YYYY")}
                    </td>
                    <td className={classes.dat}>{exerciseData1.weight} Kg</td>
                    <td>
                      <button
                        className={classes.del}
                        onClick={() => openModal(exerciseData1)}
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {ejercicios.length === 0 && (
          <DefaultMessage message="No has registrado ningun peso todavía. Anímate y comprueba que tal van tus fuerzas." />
        )}
      </div>
    );
  }

  return (
    <div className={classes.containerListExercise}>
      {props.exercises.length > 0 && inputInitial !== input && (
        <div className={classes.listExercises}>
          {props.exercises.map((exercise) => {
            return (
              <div key={exercise.id_exercise}>
                <p
                  className={classes.nameExercises}
                  onClick={() => getWeight(exercise)}
                >
                  {exercise.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <div className={classes.exerciseDatasDiv}>
        {selectedExercise.hasExerciseSelected && inputInitial === input && (
          <ExerciseSelected exercises={ejercicios} />
        )}
      </div>
      <div className={classes.addNewWeightDiv}>
        {addNewWeight.isAddWeight && inputInitial === input && (
          <FormAddWeight exercises={ejercicios} />
        )}
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div>
            <h2>¿Estás seguro que quieres eliminar este peso guardado?</h2>
          </div>
          <div className={classes.modalButtons}>
            <button className={classes.buttonsAcept} onClick={deleteWeight}>
              Eliminar
            </button>
            <button className={classes.buttonCancel} onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
