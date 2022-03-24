import React from 'react'
import { Container } from 'react-bootstrap'
import { NavPrincipal } from '../../shared/components/Navbs/NavPrincipal'
import { VerificacionForm } from './components/VerificacionForm'

export default function VerificacionScreen() {
  return (
    <div>
      <NavPrincipal />
      <Container>
        <VerificacionForm />
      </Container>
    </div>
  )
}

