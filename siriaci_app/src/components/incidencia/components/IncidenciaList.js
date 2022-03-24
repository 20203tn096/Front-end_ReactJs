import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Badge} from 'react-bootstrap'
import { ButtonCircle } from "../../../shared/components/ButtonCircle"
import DataTable from 'react-data-table-component'
import { CustomLoader } from "../../../shared/components/CustomLoader"
import axios from "../../../shared/plugins/axios";
import { FilterComponent } from "../../../shared/components/FilterComponent"

export const IncidenciaList = () => {
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

    const headerComponent = React.useMemo(() => {
        const clearText = () => {
            if (filterText) {
                setFilterText("");
            }
        };
        return (
            <FilterComponent
                filterText={filterText}
                onClear={clearText}
                onFilter={(e) => setFilterText(e.target.value)}
            />
        );
    }, [filterText]);

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


    return (
        <>
            <Card>
                <Card.Header>
                    <Row>
                        <Col>Incidencias</Col>
                        <Col className='text-end'>
                            <ButtonCircle
                                type={"btn btn-success btn-circle"}
                                onClickFunct={() => setOpen(true)}
                                icon="plus"
                                size={20}
                            />
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <DataTable
                        columns={columns}
                        data={filteredItems}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                        noDataComponent={"No hay registros"}
                        progressPending={isLoading}
                        progressComponent={<CustomLoader />}
                        subHeader
                        subHeaderComponent={headerComponent}
                    />

                </Card.Body>
            </Card>
        </>
    )
}
