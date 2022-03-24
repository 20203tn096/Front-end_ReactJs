import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Badge, Form, Button, Container } from 'react-bootstrap'
import { ButtonCircle } from "../../../shared/components/ButtonCircle"
import DataTable from 'react-data-table-component'
import { CustomLoader } from "../../../shared/components/CustomLoader"
import axios from "../../../shared/plugins/axios";
import { FilterComponent } from "../../../shared/components/FilterComponent"

export const ReporteIncidencias = () => {
    const [open, setOpen] = useState(false)
    const [incidencias, setIncidencias] = useState([])
    const [filterText, setFilterText] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const getIncidencia = () => {
        axios({ url: "/incidencia/", method: "GET" })
            .then((response) => {
                setIncidencias(response.data);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        getIncidencia();
    }, []);

    const filteredItems = incidencias.filter(
        (item) =>
            item.descripcion &&
            item.descripcion.toLowerCase().includes(filterText.toLowerCase())
    );

    const paginationComponentOptions = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
    };



    const columns = [
        {
            name: "#",
            cell: (row, index) => <span>{index + 1}</span>
        },
        {
            name: "descripcion",
            cell: (row) => <span>{row.descripcion}</span>
        },
        {
            name: "comentario",
            cell: (row) => <span>{row.comentario}</span>
        },
        {
            name: "importancia",
            cell: (row) => <span>{row.importancia.nombre}</span>
        },
        {
            name: "estado",
            cell: (row) => <span>{row.estado.nombre}</span>
        },
        {
            name: "aspecto",
            cell: (row) => <span>{row.aspecto.nombre}</span>
        },
        {
            name: "Estado",
            cell: (row) =>
                row.activo === 1 ? (
                    <Badge pill bg="success">
                        Activo
                    </Badge>
                ) : (
                    <Badge pill bg="danger">
                        Inactivo
                    </Badge>
                ),
        }
    ]

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                backgroundColor: "#042b61",
                color: "#FFF",
                fontWeight: "bold",
                border: "0.5px solid",
                justifyContent: "center"
                
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
                justifyContent: "center"
                
            },
        },
    };

    return (
        <>
            <Card style={{border: "1px solid"}}>
                <Card.Header style={{ backgroundColor: "#042b61", color: "#FFF", fontWeight: "bold"}}>
                    <Row>
                        <Col>Incidencias</Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Row  style={{width: 400}}> 
                            <Col>
                                <Form.Group style={{width: 150}} >
                                    <span style={{ fontWeight: "bold" }}>Fecha Inicial: </span>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group style={{width: 150}}>
                                    <span style={{ fontWeight: "bold" }}>Fecha Final: </span>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                        <Col className="text-end mt-3">
                            <Button className="success" type="submit"> Consultar</Button>
                            </Col>
                        </Row>
                    </Container>
                    <DataTable
                        columns={columns}
                        data={filteredItems}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                        noDataComponent={"No hay registros"}
                        progressPending={isLoading}
                        progressComponent={<CustomLoader />}
                        subHeader
                        customStyles={customStyles}
                    />

                </Card.Body>
                <Card.Footer  style={{ backgroundColor: "#042b61", color: "#FFF", fontWeight: "bold"}}>
                    <Row>
                        <Col className="text-end">
                            <Button variant="warning"  >Generar Reporte</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    )
}
