import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Badge, Button, Container, Form } from 'react-bootstrap'
import { ButtonCircle } from "../../../shared/components/ButtonCircle"
import DataTable from 'react-data-table-component'
import { CustomLoader } from "../../../shared/components/CustomLoader"
import axios from "../../../shared/plugins/axios";
import { FilterComponent } from "../../../shared/components/FilterComponent"
import CapsulaForm from '../../capsula/CapsulaForm'

export const CapsulaList = () => {
    const [open, setOpen] = useState(false)
    const [capsulas, setCapsulas] = useState([])
    const [filterText, setFilterText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([])
    const [responsables, setResponsables] = useState([])


    const getResponsables = () => {
        axios({ url: "/responsables/", method: "GET" })
            .then((response) => {
                setResponsables(response.data);
                console.log(responsables)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const getCapsulas = () => {
        axios({ url: "/capsula/", method: "GET" })
            .then((response) => {
                setCapsulas(response.data);
                console.log(capsulas)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getImages = () => {
        axios({ url: "/image_capsula/", method: "GET" })
            .then((response) => {
                setImages(response.data);
                console.log(images)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
        setIsLoading(true);
        getResponsables();
        getImages();
        getCapsulas();
    }, []);



    return (
        <Container fluid>
            <Row className="mb-5">
                <Card>
                    <Card.Body>
                        <Row className="justify-content-center">
                            <Col  md={{ offset: 9}} sm ={{ offset: 7}}>
                                <Form.Group style={{width: 200}}>
                                    <Form.Label>Aspecto</Form.Label>
                                    <Form.Select>
                                        <option value="1"> Flora y Fauna</option>
                                        <option value="2"> Agua</option>
                                    </Form.Select>
                                </Form.Group>
                                <ButtonCircle
                                    type={"btn btn-success btn-circle"}
                                    onClickFunct={() => setOpen(true)}
                                    icon="plus"
                                    size={20}
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>

            <Row className='justify-content-center' >
                <CapsulaForm
                    isOpen={open}
                    responsables={responsables}
                    onClose={() => setOpen(false)}
                />
                <Col style={{ overflowY: 'scroll', height: "500px", marginRight: 40 }}>
                    {
                        images.map((item, i) => {
                            return (
                                <div key={i}>
                                    <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card style={{ width: '40rem' }} className="mb-4">
                                            <Card.Img variant="top" onClick={console.log("Hola")} src={`data:image/jpeg;base64,${item.imagen}`} width={200} height={400} />
                                            <Card.Body>
                                                <Card.Title> {item.capsula.titulo} </Card.Title>
                                                <Card.Text>
                                                    {item.capsula.contenido}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            )
                        })
                    }
                </Col>

            </Row>
        </Container>
    )
}