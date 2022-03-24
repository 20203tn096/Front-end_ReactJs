import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, Row, Col, Badge } from "react-bootstrap"
import FeatherIcon from "feather-icons-react"
import Alert, { msjConfirmacion, msjError, msjExito, titleConfirmacion, titleError, titleExito } from "../../../shared/plugins/alert"

export const UsuarioFormUpdate = ({ isOpenUpdate, onClose, aspectos }) => {
    const [rolSelected, setRolSelected] = useState()

    const handleClose = () => {
        Alert.fire({
            title: titleConfirmacion,
            text: msjConfirmacion,
            icon: "warning",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "",
            reverseButtons: true,
            backdrop: true,
            showLoaderOnConfirm: true,
            showCloseButton: true,
            allowOutsideClick: !Alert.isLoading,
            preConfirm: () => {
                onClose()
            }

        })

    }

    useEffect(() => {

    }, [rolSelected])

    const rol = (rol) => {
        console.log("Entro a rol");
        let body = document.querySelector("#contenedor");
        switch (parseInt(rol)) {
            case 1:
                body.innerHTML = `
                <div class="row mt-2">
                  <div class="col">
                      <span><strong>Carrera: </strong></span>
                      <div class="input-group mt-2">
                         <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>
                  <div class="col">
                      <span><strong>Cuatrimestre: </strong></span>
                      <div class="input-group mt-2">
                         <input type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>
                  <div class="col">
                      <span><strong>Grupo: </strong></span>
                      <div class="input-group mt-2">
                         <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                      </div>
                  </div>
                </div>
                `
                break;
            case 2:
                body.innerHTML = `
                <div class="row mt-2">
                  <div class="col">
                      <span ><strong>Aspecto: </strong></span>
                      <div class="input-group mt-2">
                        <select class="form-select" >
                        ${
                            aspectos.map((item) =>{
                                console.log(item);
                                return (`<option value="${item.id}">${item.nombre}</option>`)
                            })
                        }
                        </select>
                      </div>
                  </div>
                </div>
                `;
                break
            case 3:
                body.innerHTML = '';
                break
            default:
                break;
        }
    }


    return (
        <Modal show={isOpenUpdate} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modificar Usuario</Modal.Title>
                {
                    console.log(aspectos)
                }
            </Modal.Header>
            <Form >
                <Modal.Body>
                    <Row className='mt-2'>
                        <Col>
                            <Form.Group>
                                <Form.Label> Nombre: </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label> Apellido Materno: </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label> Apellido Paterno: </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Correo: </Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Teléfono: </Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Contraseña: </Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Confirmar Contraseña: </Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mt-2'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Rol: </Form.Label>
                                <Form.Select type="password" onChange={(event) => rol(event.target.value)}>
                                    <option value="1"> Estudiante</option>
                                    <option value="2"> Responsable</option>
                                    <option value="3"> Administrador</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div id="contenedor">
                        <Row className='mt-2'>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Carrera: </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Cuatrimestre: </Form.Label>
                                    <Form.Control type="number" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Grupo: </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Form.Group className='mb-4'>
                            <Col className='text-end'>
                                <Button variant='secondary' onClick={handleClose} className='me-3'> <FeatherIcon icon={"x"} />Cerrar</Button>
                                <Button variant='success' className='me-3' type='submit'> <FeatherIcon icon={"edit"} />Modificar</Button>
                            </Col>
                        </Form.Group>
                    </Row>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
