// Componente para iniciar sesion el usuario
// Component to login the user

import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/loginSlice";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import classes from "./Login.module.css";
import { Spinner } from "../components/spinner/Spinner";
import { Alert } from "../components/alert/Alert";

export const Login = (props) => {
  //navigate, usecontext and form tools

  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const logged = useSelector((state) => state.login.login.isLogged);

  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(formValues)).then(() => {
      setFormValues({
        email: "",
        password: "",
      });
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <div >
      {logged && <Navigate to="/dashboard" replace={true} />}
      {loading && <Spinner />}
      {status === "failed" && <Alert message="Error en el registro" />}

      {!loading && (
        <div >
            {/* <h1 >BOX DISTRITO9</h1> */}
            <h2 className={classes.titulo}>Iniciar Sesion</h2>
          <div className={classes.login}>
            <form className={classes.contactform} onSubmit={handleSubmit}>
              <label className={classes.labels} htmlFor="email">
                Email
              </label>
              <input
                className={classes.user}
                id="email"
                type="email"
                name="email"
                value={formValues.email}
                placeholder="Email"
                onChange={handleInputChange}
              />
              <label className={classes.labels} htmlFor="password">
                Password
              </label>
              <input
                className={classes.password}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={formValues.password}
              />

              <div className={classes.links}>
                <Link  to="/register">
                  ¿No estás registrado?
                </Link>
              </div>
              <div>
                <button type="submit" className={classes.boton}>
                  Acceder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  //submit data
  // enviar datos

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8000/login", {
  //     method: "POST",
  //     body: JSON.stringify(formValues),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setIdUser(data.id_user);
  //       console.log('estos son los datos que nos da el login', data.id_user)
  //       // setToken(data.token);
  //       console.log(data.token);
  //       navigate("/dashboard", { replace: true });
  //     });
  // if (!idUser) {
  //   return (
  //     <div>
  //       <Spinner/>
  //     </div>
  //   );
  // }
};
//If you have Token ok and if you don't have it, it returns you to the control panel
// Si tienes Token ok y si no tienes te devuelve al panel de control

// if (token) return <Navigate to="/dashboard/" replace />;
// return (

//   <div >
//     <div className={classes.container}>
//       <div className={classes.titulo}>
//       <h1>BOX DISTRITO9</h1>
//       <h2>Iniciar Sesion</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email" >
//           Email
//         </label>
//         <input
//           className={classes.formulario}
//           id="email"
//           type="email"
//           name="email"
//           value={formValues.email}
//           placeholder="Email"
//           onChange={handleInputChange}
//         />
//         <label htmlFor="password" >
//           Password
//         </label>
//         <input
//           className={classes.formulario}
//           id="password"
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleInputChange}
//           value={formValues.password}
//         />

//         <div >

//           <Link className={classes.registro} to="/register">¿No estás registrado?</Link>
//         </div>
//         <div>
//           <button type="submit" className={classes.button}>
//             Acceder
//           </button>
//         </div>
//       </form>
//       </div>
//     </div>
//   </div>
// );
// };
