import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'

export const CapsulaCard2 = (props) => {
    const { images } = props;
    return (
        <>
            <Row>
                <div style={{ overflowY: "scroll", height: 360, width:450}}>
                    {
                        images.map((item, i) => {
                            return (
                                <div key={i}>
                                    <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Card style={{ width: '20rem' }} className="mb-4">
                                            <Card.Img variant="top" style={{width:"auto", height: "auto"}} height="auto" onClick={console.log("Hola")} src={`data:image/jpeg;base64,${item.imagen}`} width={200} height={400} />
                                            <Card.Body>
                                                <Card.Title > {item.capsula.titulo} </Card.Title>
                                                <Card.Text >
                                                    {item.capsula.contenido}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Row>
                                                    <Col className="text-center">
                                                    <Button>Ver mas</Button>
                                                    </Col>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </div>
                            )
                        })
                    }
                </div>
            </Row>
        </>
    )
}
