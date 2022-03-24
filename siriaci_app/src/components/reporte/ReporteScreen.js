import React from 'react'
import { ReporteIncidencias } from './components/ReporteIncidencias'
import { Row, Col } from 'react-bootstrap'

export default function ReporteScreen() {
    return (
        <>
            <Row>
                <Col className="mt-5">
                    <ReporteIncidencias />
                </Col>
            </Row>
        </>
    )
}
