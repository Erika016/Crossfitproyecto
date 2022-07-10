// import classes from "./DeleteWeigth.module.css";
// import { useEffect, useState } from "react";
// import { Users } from "../../Registro/Users";
// // import { Link } from "react-router-dom";

// //Mostrar elperfil dl usuario


// //   const [formValues, setFormValues] = useState({
//   // name: "",
//   // last_name: "",
//   // birth_date: "",
//   // phone: "",
//   // email: "",
//   // sessions: "",
//   // photo: "",
//     // rol: "basic",
//     // password: "",
//     // });
//     // const handleInputChange = (e) => {
//       //   setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//       // };
//       //Submit data
//       // Enviar datos
//       export const Perfil = () => {

//         const [formValues, setFormValues] = useState({
//           name: "",
//           last_name: "",
//           birth_date: "",
//           phone: "",
//           email: "",
//           sessions: "",
//           photo: "",
//           rol: "basic",
//           password: "",
//           });
//   useEffect (() => {
//     fetch("http://localhost:8000/users/userProfile/:id_User", {
//       method: "GET",
//       body: JSON.stringify(formValues),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   },[]);
  
//   return(
//     <div>
//       {formValues.map((user) => {
//         return (
//           <li key={user.id_User}>
//             <p>{user.name} </p>
//             <p>{user.last_name}</p>
//             <p>{user.birth_date}</p>
//             <p>{user.email}</p>
//             <p>{user.phone}</p>
//             <p>{user.sessions}</p>
//             <p>{user.photo}</p>
//             <p>{user.rol}</p>
//             <p>{user.password}</p>           
     
//           </li>
//         );
//       })}
//     </div>
//   );
//       }

//   // return (
//   //   <div className={classes.contenedor}>
//   //     <div className={classes.datos}>
//   //       <h1>BOX DISTRITO9</h1>
//   //       <h2>Registrarse</h2>
//   //       <form>
//   //         <div className={classes.columna}>
//   //           <div className={classes.primero}>
//   //             <label htmlFor="first_name">Name</label>
//   //             <input
//   //               id="name"
//   //               className={classes.Name}
//   //               type="text"
//   //               name="name"
//   //               value={formValues.name}
//   //               placeholder="Name"
//   //               required
//   //               onChange={handleInputChange}
//   //             />
//   //             <label htmlFor="last_name">Last Name</label>
//   //             <input
//   //               id="last_name"
//   //               className={classes.lastName}
//   //               type="text"
//   //               name="last_name"
//   //               value={formValues.last_name}
//   //               placeholder="Last Name"
//   //               required
//   //               onChange={handleInputChange}
//   //             />
//   //             <label htmlFor="birth_date">Birth Date</label>
//   //             <input
//   //               className={classes.birth}
//   //               id="birth_date"
//   //               type="date"
//   //               name="birth_date"
//   //               placeholder="Birth Date"
//   //               required
//   //               value={formValues.birth_date}
//   //               onChange={handleInputChange}
//   //             />
//   //             <label htmlFor="phone">Phone</label>
//   //             <input
//   //               className={classes.phone}
//   //               id="phone"
//   //               type="text"
//   //               name="phone"
//   //               placeholder="Phone"
//   //               value={formValues.phone}
//   //               onChange={handleInputChange}
//   //             />
//   //           </div>
//   //           <div className={classes.segundo}>
//   //             <label htmlFor="email">Email</label>
//   //             <input
//   //               className={classes.email}
//   //               id="email"
//   //               type="email"
//   //               name="email"
//   //               value={formValues.email}
//   //               placeholder="Email"
//   //               required
//   //               onChange={handleInputChange}
//   //             />

//   //             <label htmlFor="sessions">sessions</label>
//   //             <input
//   //               className={classes.sessions}
//   //               id="sessions"
//   //               type="text"
//   //               name="sessions"
//   //               placeholder="sessions"
//   //               required
//   //               onChange={handleInputChange}
                
//   //             />
//   //             <label htmlFor="photo">Photo</label>
//   //             <input
//   //               className={classes.photo}
//   //               id="photo"
//   //               type="file"
//   //               name="photo"
//   //               placeholder="Photo"
//   //               value={formValues.photo}
//   //               onChange={handleInputChange}
//   //             />
//   //             <label htmlFor="password">Password</label>
//   //             <input
//   //               className={classes.password}
//   //               id="password"
//   //               type="password"
//   //               name="password"
//   //               placeholder="Password"
//   //               required
//   //               value={formValues.password}
//   //               onChange={handleInputChange}
//   //             />
//   //           </div>
//   //         </div>
//   //         {/* <div >
//   //           <button className={classes.button} type="submit">Mí perfil B</button>
//   //         </div> */}
//   //       </form>
//   //     </div>
//   //   </div>
//   // );

