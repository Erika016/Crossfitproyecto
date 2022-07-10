// import classes from "./ExercisesList.module.css";
// import React, { useState } from "react";
// import { ExerciseDatas } from "./ExerciseDatas";

// export const ExercisesList = (props) => {  
  
//   const [selectedExercise, setExercise] = useState({
//     hasExerciseSelected: false
//   })

//   const [exerciseDatas, setExercisesDatas] = useState([]);

//      var arrayWeightDatas = [
//         {
//           id_weight: 0,
//           weight: "",
//           date: "",
//           id_User: 0,
//           id_exercise: 0
//       }
//      ];
   
//      const getWeight = (e) => {
//       if(e && e !== ''){
//      const bus = 2;
//        setExercise ({
//         hasExerciseSelected: true
//       })
//        fetch("http://localhost:8000/exercises/searchWeight/"+ e + "/" + bus, {
//          method: "GET",
//          headers: {
//            "Content-Type": "application/json",
//          },
//        })
//          .then((res) => res.json())
//          .then((data) => {
//           if(data.data.length > 0){
//             arrayWeightDatas = data.data;
//            setExercisesDatas(arrayWeightDatas);
//            console.log('este es el array', arrayWeightDatas);
//           } else {
//             setExercisesDatas(arrayWeightDatas = []);
//           }
//          });
//         } else {
//           setExercise ({
//             hasExerciseSelected: false
//           })
//         }
//         console.log('este es el arraywe', arrayWeightDatas)
//      };

   
//       return (
//         <div className={classes.containerListExercise}>
//       <div className={classes.listExercises}>
//       {props.exercises.map((exercise, index) => (
//         <div>
//           <p className={classes.nameExercises} onClick={() => getWeight(exercise.id_exercise)}key={index}>{exercise.name}</p>
       
//         </div>
//       ))}
//       </div>
//       <div className={classes.exerciseDatas}>
//         {arrayWeightDatas.length > 0 && selectedExercise.hasExerciseSelected && <ExerciseDatas exercises={exerciseDatas}/>}
//       </div>
//       </div>
//       );
//    };
   