import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Badge, Button } from 'react-bootstrap'
import { ButtonCircle } from "../../../shared/components/ButtonCircle"
import DataTable from 'react-data-table-component'
import { CustomLoader } from "../../../shared/components/CustomLoader"
import axios from "../../../shared/plugins/axios";
import { FilterComponent } from "../../../shared/components/FilterComponent"
import { UsuarioForm } from './UsuarioForm'
import {UsuarioFormCreate} from "../components/UsuarioFormCreate"

export const UsuarioList = (props) => {
    const [open, setOpen] = useState(false)
    const [openCreate, setOpenCreate] = useState(false)
    const [usuarios, setUsuarios] = useState([])
    const [filterText, setFilterText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [usuarioSelected, setUsuarioSelected] = useState({})
    const [aspectos, setAspectos] = useState([])


    const getUsuarios = () => {
        axios({ url: "/usuario/", method: "GET" })
            .then((response) => {
                setUsuarios(response.data);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const getAspectos = () => {
        axios({ url: "/aspecto/", method: "GET" })
            .then((response) => {
                setAspectos(response.data);           
             })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        getUsuarios();
        getAspectos();
    }, []);

    const filteredItems = usuarios.filter(
        (item) =>
            item.nombre &&
            item.nombre.toLowerCase().includes(filterText.toLowerCase())
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
            cell: (row, index) => <span>{index + 1}</span>,
        },
        {
            name: "Nombre",
            cell: (row) => <span>{`${row.nombre} ${row.apellido1} ${row.apellido2}`}</span>,
            sortable: true,
            selector: (row) => `${row.nombre} ${row.apellido1} ${row.apellido2}`
        },
        {
            name: "Correo",
            cell: (row) => <span>{row.correo}</span>,
            sortable: true,
            selector: (row) => `${row.correo}`
        },
        {
            name: "Teléfono",
            cell: (row) => <span>{row.telefono}</span>,
            sortable: true,
            selector: (row) => `${row.telefono}`
        },
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
                        <Col>Usuarios</Col>
                        <UsuarioFormCreate
                            isOpenCreate={openCreate}
                            onClose={() => setOpenCreate(false)}
                            aspectos={aspectos}
                        />
                        <UsuarioForm
                            isOpen={open}
                            onClose={() => setOpen(false)}
                            usuarioSelected={usuarioSelected}
                            aspectos={aspectos}

                        />
                        <Col className='text-end'>
                            <ButtonCircle
                                type={"btn btn-success btn-circle"}
                                onClickFunct={() => setOpenCreate(true)}
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
                        onRowClicked={(event) => {
                            setUsuarioSelected(event)
                            setOpen(true)
                            console.log(usuarioSelected);
                        }}
                        customStyles={customStyles}
                    />

                </Card.Body>
            </Card>
        </>
    )
}