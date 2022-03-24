import React from 'react'
import { Card, Form, Row, Button, Col } from 'react-bootstrap'
import { FormText } from 'react-bootstrap'

export const RecuperacionForm = () => {
    return (
        <Row className='justify-content-center mt-5' >
            <Col md={{ span: 5, offset: 0 }} lg={{ span: 7, offset: 0 }}  >
                <Card>
                    <Card.Header style={{backgroundColor: "#676f77", color:"#FFF "}}>Recuperar contraseña</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className='mb-4'>
                                <Form.Label>Correo electrónico:</Form.Label>
                                <Form.Control type="email" placeholder='example@utez.edu.mx' />
                            </Form.Group>
                            <Row>
                                <Form.Group className='mb-4'>
                                    <Col className='text-end'>
                                        <Button variant='warning' type='submit'>Recuperar contraseña</Button>
                                    </Col>
                                </Form.Group>
                            </Row>
                            <Form.Text className='text-muted text-justify'>Nota 1: Recuerda que el correo de recuperación será enviado a la dirección email registrada en tu cuenta, si eres docente el email será enviado a tu correo institucional, si eres estudiante el email será enviado al correo electrónico registrado en tu ficha de admisión.</Form.Text>
                            <br/>
                            <Form.Text className='text-muted text-justify'>Nota 2: No olvides revisar tu bandeja de correos no deseados</Form.Text>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

