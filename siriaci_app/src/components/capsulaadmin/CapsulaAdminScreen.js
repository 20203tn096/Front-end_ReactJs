import React from 'react'
import { CapsulaList } from './components/CapsulaList'
import { Row, Col } from 'react-bootstrap'
export const CapsulaAdminScreen = () => {
  return (
    <>
    <Row>
        <Col className="mt-5">
            <CapsulaList/>
        </Col>
    </Row>
</>
  )
}
