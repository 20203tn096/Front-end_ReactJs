import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col, Badge, Container } from "react-bootstrap"
import FeatherIcon from "feather-icons-react"
import Alert, { msjConfirmacion, msjError, msjExito, titleConfirmacion, titleError, titleExito } from "../../../shared/plugins/alert"
import { UsuarioFormUpdate } from './UsuarioFormUpdate'

export const UsuarioForm = ({ isOpen, onClose, usuarioSelected, aspectos }) => {
    const [isOpenUpdate, setIsOpenUpdate] = useState(false)
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


    const DesplegarUsuario = () => {
        return (
            <Form>
                <Row className='mb-2'>
                    <Col>
                        <span style={{ fontWeight: "bold" }}>Nombre: </span>
                        <span >{`${usuarioSelected.nombre} ${usuarioSelected.apellido1} ${usuarioSelected.apellido2}`}</span>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <span style={{ fontWeight: "bold" }}>Teléfono: </span>
                        <span>{usuarioSelected.telefono}</span>
                    </Col>
                    <Col>
                        <span style={{ fontWeight: "bold" }}>Correo: </span>
                        <span>{usuarioSelected.correo}</span>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        {
                            usuarioSelected ? <Badge bg="success">Comunidad UTEZ</Badge> : <Badge bg="warning">Comunidad Externa</Badge>
                        }
                    </Col>
                </Row>

            </Form>
        )
    }


    return (

        <Modal show={isOpen} onHide={handleClose} >

            <Modal.Header closeButton>
                <Modal.Title>Información Usuario</Modal.Title>
                <UsuarioFormUpdate
                    isOpenUpdate={isOpenUpdate}
                    onClose={() => setIsOpenUpdate(false)}
                    aspectos={aspectos}
                />
            </Modal.Header>
            <Modal.Body>

                <Row>
                    <DesplegarUsuario />
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Form.Group >
                        <Col className='text-end'>
                            <Button variant='secondary' onClick={handleClose} className='me-3'> <FeatherIcon icon={"x"} />Cerrar</Button>
                            <Button variant='danger' className='me-3' type='submit'> <FeatherIcon icon={"check"} />Eliminar</Button>
                            <Button variant='warning' onClick={() => {
                                setIsOpenUpdate(true)
                            }}> <FeatherIcon icon={"edit"} /> Modificar</Button>
                        </Col>
                    </Form.Group>
                </Row>
            </Modal.Footer>
        </Modal>

    )
}
