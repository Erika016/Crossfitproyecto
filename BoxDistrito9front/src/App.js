// Component centralizes all routing of the application.
// Componente centraliza todos los enrutados de la aplicacion.

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Registro/Home";
import { Login } from "./Registro/Login";
import { Dashboard } from "./Registro/Dashboard";
import { NotFound } from "./Registro/NotFound";
import { Register } from "./Registro/Register";
import { TarifasHorarios } from "./components/tarifasYhorarios/TarifasHorarios.js";
import { Users } from "./Registro/Users";
import { UserDetails } from "./Registro/UserDetails";
import { Exercises } from "./components/datos/Exercises";
import { SeccionCrossfit } from "./components/info/SeccionCrossfit.js";
import { Fragment } from "react";
import { SeccionBoxeo } from "./components/info/SeccionBoxeo";
import SeccionFisio from "./components/info/SeccionFisio";
import { ContactoLocalizacion } from "./components/contacto/ContactoLocalizacion";
// import { AddWeigth } from "./components/datos/AddWeight";
import { Perfil } from "./components/datos/Perfil";
import { DeleteWeigth } from "./components/datos/DeleteWeigth";

import { SearchWeigth } from "./components/datos/SearchWeight";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tarifashorarios" element={<TarifasHorarios />} />
        <Route
          path="/contactolocalizacion"
          element={<ContactoLocalizacion />}
        />
        <Route path="/exercises" element={<Exercises />} />
        {/* <Route path="/addWeigth" element={<AddWeigth />} /> */}
        <Route path="/deleteWeigth" element={<DeleteWeigth />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/seccionCrossfit" element={<SeccionCrossfit />} />
        <Route path="/seccionBoxeo" element={<SeccionBoxeo />} />
        <Route path="/seccionFisio" element={<SeccionFisio />} />
        <Route path="/searchWeigth" element={<SearchWeigth />} />

        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":id_User" element={<UserDetails />} />
        </Route>

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </Fragment>
  );
}

export default App;
