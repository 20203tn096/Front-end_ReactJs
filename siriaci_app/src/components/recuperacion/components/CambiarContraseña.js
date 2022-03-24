import React from 'react'
import { Card, Form, Row, Button, Col } from 'react-bootstrap'

export const CambiarContraseña = () => {
  return (
    <Row className='justify-content-center mt-5' >
    <Col md={{ span: 5, offset: 0 }} lg={{ span: 7, offset: 0 }}  >
        <Card>
            <Card.Header style={{ backgroundColor: "#676f77", color: "#FFF " }}>Cambiar Contraseña</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className='mb-4'>
                        <Form.Label>Contraseña nueva: </Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>
                    <Form.Group className='mb-4'>
                        <Form.Label>Confirmar Contraseña: </Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>
                    <Row>
                        <Form.Group className='mb-4'>
                            <Col className='text-end'>
                                <Button variant='warning' type='submit'>Cambiar</Button>
                            </Col>
                        </Form.Group>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    </Col>
</Row>
  )
}
