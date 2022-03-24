import React from 'react'
import { UsuarioList } from './components/UsuarioList'
import { Row, Col } from 'react-bootstrap'

export const UsuarioScreen = () => {
  return (
    <>
    <Row >
        <Col className="mt-5">
            <UsuarioList />
        </Col>
    </Row>
</>

  )
}
