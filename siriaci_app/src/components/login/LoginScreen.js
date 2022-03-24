import React from 'react'
import { Container } from 'react-bootstrap'
import { NavPrincipal } from '../../shared/components/Navbs/NavPrincipal'
import { NavUsuario } from '../../shared/components/Navbs/NavUsuario'
import LoginForm from "./components/LoginForm"

export const LoginScreen = () => {
    return (
        <>
            <NavPrincipal />
            <Container>
                <LoginForm />
            </Container>
        </>
    )
}