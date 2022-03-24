import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import "../../../../src/assets/css/button.css"
import { Container, Nav, Navbar, Button, Form, NavDropdown } from "react-bootstrap";
import { IncidenciaScreen } from "../../../components/incidencia/IncidenciaScreen";
import { LoginScreen } from '../../../components/login/LoginScreen';
import VerificacionScreen from "../../../components/recuperacion/VerificacionScreen"
import RecuperacionScreen from '../../../components/recuperacion/RecuperacionScreen';
import CambiarContraseñaScreen from "../../../components/recuperacion/CambiarContraseñaScreen"

export const NavUsuario = () => {

  return (
    <Router>
    <Navbar style={{ backgroundColor: "#042b61" }} variant="white">
      <Container fluid>
        <Navbar.Brand href="#">
          <FeatherIcon icon="home" color={"white"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={"/"} className="nav-link" style={{ color: "white",
          fontWeight: 'bold'}}>
            Incidencias
          </Link>
          <Link to={"/subcategory"} className="nav-link" style={{ color: "white",
          fontWeight: 'bold'}}>
            Subcategorías
          </Link>
          </Nav>
          <Form className="d-flex">
            <Button className="btn-outline-white">Salir <FeatherIcon icon="log-out"  className={"icon-outline-white"} /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <Routes>
        <Route path={"/"} element={<IncidenciaScreen />} />
        <Route path={"/subcategory"} element={<CambiarContraseñaScreen/>} />
      </Routes>
    </Container>

  </Router>
  )

}

