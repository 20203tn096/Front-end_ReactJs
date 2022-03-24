import React, { useState } from 'react'
import { Modal, Form, Row, Col, Button } from 'react-bootstrap'
import FeatherIcon from "feather-icons-react"
import { useFormik } from 'formik'
import * as yup from "yup"
import { isValidDateValue } from '@testing-library/user-event/dist/utils'
import Alert, { msjConfirmacion, msjError, msjExito, titleConfirmacion, titleError, titleExito } from "../../shared/plugins/alert"
import axios from "../../shared/plugins/axios"

const CapsulaForm = ({ isOpen, responsables, onClose }) => {
    const [fileBase64, setFileBase64] = useState([])
    const [file, setFile] = useState([])
    const handleClose = () => {
        onClose();
        formik.resetForm();
        //resetear el formulario
    };

    const handleChangeFile = (event) => {
        formik.handleChange(event);
        setFileBase64([]);
        const  files  = Array.from(event.target.files);
        console.log(event.target.files)
        let filesBase64 = []
       files.map((file) => {
        let reader = new FileReader();
        reader.onloadend = (data) =>{
            filesBase64.push(data.target.result);
            setFileBase64(files => [...files, data.target.result.replace(/^data:image\/\w+;base64,/, "")])
        }
        reader.readAsDataURL(file)
       })
       console.log(filesBase64)
    };

    const formik = useFormik({
        initialValues: {
            titulo: "",
            contenido: "",
            activo: 1,
            responsable: "",
            imagenes: ""
        },
        validationSchema: yup.object().shape({
            titulo: yup.string().required("Campo obligatorio"),
            contenido: yup.string().required("Campo obligatorio"),
            responsable: yup.string().required("Campo obligatorio"),
            imagenes: yup.string().required("Campo obligatorio")
        }),
        onSubmit: (values) => {
            let listaCapsula  =  fileBase64.map((file)=>({imagen: file}));
           
            let capsula = {...values, imagenes: listaCapsula, responsable:{id: parseInt(values.responsable)}}
            console.log(capsula)
            Alert.fire({
                title: titleConfirmacion,
                text: msjConfirmacion,
                icon: "warning",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "",
                cancelButtonText: "Cancelar",
                cancelButtonColor: "",
                reverseButtons: true,
                backdrop: true,
                showLoaderOnConfirm: true,
                allowOutsideClick: !Alert.isLoading,
                preConfirm: () => {

                    return axios({
                        url: "/capsula/",
                        method: "POST", 
                        data: JSON.stringify(capsula) })
                        .then((response) => {
                            if (!response.error) {
                                Alert.fire({
                                    title: titleExito,
                                    text: msjExito,
                                    icon: "success",
                                    confirmButtonText: "Aceptar",
                                    confirmButtonColor: "",
                                }).then((result) =>{
                                    if(result.isConfirmed){
                                        handleClose();
                                    }

                                })
                            }
                            return response
                        }).catch((error) =>{
                            console.log(error)
                            Alert.fire({
                                title: titleError,
                                text: msjError,
                                icon: "error",
                                confirmButtonText: "Aceptar",
                                confirmButtonColor: "",
                            }).then((result) =>{
                                if(result.isConfirmed){
                                    handleClose();
                                }

                            })
                        })
                }
            })
        }
    })

    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Capsula</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className='mb-4'>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control name="titulo" placeholder='Gaming' value={formik.values.titulo} onChange={formik.handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-4'>
                        <Form.Label>Contenido</Form.Label>
                        <Form.Control name="contenido" placeholder='Gaming' value={formik.values.contenido} onChange={formik.handleChange}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Responsable</Form.Label>
                        <Form.Select name="responsable" value={formik.values.responsable} onChange={formik.handleChange} >
                            <option value={"0"}> Seleccione...</option>
                            {
                                responsables.map((item) => {
                                    return <option value={item.id} key={item.id}> {item.usuario.nombre}</option>
                                })
                            }

                        </Form.Select>
                        {
                            formik.errors.responsable != null ? (<span color='blue'> {formik.errors.responsable} </span>) : null
                        }
                    </Form.Group>



                    <Form.Group className='mb-4'>
                        <Form.Label>Imagenes: </Form.Label>
                        <Form.Control
                            name="imagenes"
                            type='file'
                            multiple
                            accept='image/*'
                            onChange={ handleChangeFile}
                        />
                    </Form.Group>


                    <Row>
                        <Form.Group className='mb-4'>
                            <Col className='text-end'>
                                <Button variant='danger' onClick={handleClose} className='me-3'> <FeatherIcon icon={"x"} />Cerrar</Button>
                                <Button variant='success' type='submit'> <FeatherIcon icon={"check"} />Registrar</Button>
                            </Col>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default CapsulaForm;