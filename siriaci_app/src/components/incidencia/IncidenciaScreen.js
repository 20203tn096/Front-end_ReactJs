import React from "react";
import { Col, Row } from "react-bootstrap";
import { IncidenciaList } from './components/IncidenciaList'
import {CapsulaScreen} from "../CapsulaScreen"

export const IncidenciaScreen = () => {
    return (
        <>
            <Row>
                <Col className="mt-5">
                    <IncidenciaList />
                </Col>
                <Col>
                <CapsulaScreen/>
                </Col>
            </Row>
        </>

    );
};
