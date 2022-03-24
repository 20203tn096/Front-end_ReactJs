import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import "../../../../src/assets/css/button.css"
import { Container, Nav, Navbar, Button, Form, NavDropdown } from "react-bootstrap";
import { IncidenciaScreen } from "../../../components/incidencia/IncidenciaScreen";
import CambiarContraseñaScreen from "../../../components/recuperacion/CambiarContraseñaScreen"
import { UsuarioList } from '../../../components/usuario/components/UsuarioList';
import { UsuarioScreen } from '../../../components/usuario/UsuarioScreen';
import { CapsulaAdminScreen } from '../../../components/capsulaadmin/CapsulaAdminScreen';
import  ReporteScreen from '../../../components/reporte/ReporteScreen';
import { Error404 } from '../../public/Error404';
import { PerfilAdmin } from '../../../components/administrador/PerfilAdmin';

export const NavAdministrador = () => {
  return (
    <Router>
    <Navbar style={{ backgroundColor: "#042b61" }} variant="white" className='sticky-top'>
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
            Usuarios
          </Link>
          <Link to={"/capsulas"} className="nav-link" style={{ color: "white",
          fontWeight: 'bold'}}>
            Capsulas
          </Link>
          <Link to={"/reporte"} className="nav-link" style={{ color: "white",
          fontWeight: 'bold'}}>
           Reporte
          </Link>
          <Link to={"/perfil"} className="nav-link" style={{ color: "white",
          fontWeight: 'bold'}}>
            Perfil
          </Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-light">Salir <FeatherIcon icon="log-out"/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container >
      <Routes>
        <Route path={"/"} element={<UsuarioScreen />} />
        <Route path={"/capsulas"} element={<CapsulaAdminScreen />} />
        <Route path={"/reporte"} element={<ReporteScreen />} />
        <Route path={"/perfil"} element={<PerfilAdmin/>} />
        <Route path={"/*"} element={<Error404/>} />
      </Routes>
    </Container>

  </Router>
  )
}
