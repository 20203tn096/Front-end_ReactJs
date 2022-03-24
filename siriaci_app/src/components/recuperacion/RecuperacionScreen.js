import React from 'react'
import { Container } from 'react-bootstrap'
import { NavPrincipal } from '../../shared/components/Navbs/NavPrincipal'
import { RecuperacionForm } from './components/RecuperacionForm'

export default function RecuperacionScreen () {
  return (
    <div>
    <NavPrincipal/>
      <Container>
        <RecuperacionForm />
      </Container>
    </div>
  )
}
