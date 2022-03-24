import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const NavPrincipal = () => {
  return (
    <>
    <Navbar style={{ backgroundColor: "#042b61" }} variant="white">
    <Container fluid>
        <Navbar.Brand style={{color: "#FFF", fontWeight: "bold"}}>Sistema de Reporte de Incidencias Ambientales y Cápsulas Informativas</Navbar.Brand>
    </Container>
    </Navbar>
    </>
  )
}
