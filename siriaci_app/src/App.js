import React from "react";
import { NavUsuario } from "./shared/components/Navbs/NavUsuario";
import { LoginScreen } from "./components/login/LoginScreen"
import { Row } from "react-bootstrap";
import RecuperacionScreen from "./components/recuperacion/RecuperacionScreen";
import {CapsulaScreen}  from "./components/CapsulaScreen";
import { NavAdministrador } from "./shared/components/Navbs/NavAdministrador";
import CambiarContraseñaScreen from "./components/recuperacion/CambiarContraseñaScreen";
import VerificacionScreen from "./components/recuperacion/VerificacionScreen";
const App = () => {
  return (
  
      <LoginScreen/>

  );
};

export default App;


