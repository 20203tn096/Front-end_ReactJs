import React from 'react'
import { Container } from 'react-bootstrap'
import { NavPrincipal } from '../../shared/components/Navbs/NavPrincipal'
import { CambiarContraseña } from './components/CambiarContraseña'

export default function CambiarContraseñaScreen () {
  return (

    <div>
    <NavPrincipal/>
      <Container>
      <CambiarContraseña/>
      </Container>
    </div>
  )
}
