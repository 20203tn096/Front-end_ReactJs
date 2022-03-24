import React from 'react'
import { Container, Image, Row, Col, Form, Card, Button, TabContainer } from 'react-bootstrap'
import imgPerfil from "../../assets/img/perfil.png"
import FeatherIcon from "feather-icons-react"

export const PerfilAdmin = () => {
    return (

        <Container className="mt-5">
            <Card style={{ border: "1px solid" }}>
                <Card.Header style={{ backgroundColor: "#042b61", color: "#FFF", fontWeight: "bold" }}>
                    <Row>
                        <Col>Perfil Administrador</Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col style={{ width: 80, }} md={{ span: 1 }} className="me-3 text-center" >
                            <Image
                                src={imgPerfil}
                                width={80}
                                height={80}
                            />
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Nombre: </Form.Label>
                                <Form.Control type="text" disable></Form.Control>
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Apellido Paterno: </Form.Label>
                                <Form.Control type="text" disable></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Apellido Materno: </Form.Label>
                                <Form.Control type="text" disable></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row className='mt-2'>
                        <Col >
                            <Form.Group>
                                <Form.Label>Correo: </Form.Label>
                                <Form.Control type="email" disable></Form.Control>
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Contraseña: </Form.Label>
                                <Form.Control type="text" disable></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Confirmar Contraseña: </Form.Label>
                                <Form.Control type="text" disable></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row className='mt-2'>
                        <Col md={{ span: 4 }}>
                            <Form.Group>
                                <Form.Label>Teléfono: </Form.Label>
                                <Form.Control type="number" disable></Form.Control>
                            </Form.Group>

                        </Col>
                    </Row>



                </Card.Body>
                <Card.Footer style={{ backgroundColor: "#042b61", color: "#FFF", fontWeight: "bold" }}>
                    <Row>
                        <Col className='text-end'>
                            <Button variant='warning' className='me-2' > <FeatherIcon icon={"edit"} /> Editar</Button>
                            <Button variant='success' > <FeatherIcon icon={"check"} /> Modificar</Button>

                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container>
    )
}
