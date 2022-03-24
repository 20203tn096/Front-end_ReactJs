import React, { useState, useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import axios from '../../shared/plugins/axios'

export const CapsulaCard = (props) => {
    const { images } = props
    return (
        <>
            <Carousel style={{ width: "500px", height: "450px" }}>

                {
                    images.map((item, i) => {
                        return (<Carousel.Item key={item.id}>
                            <Image
                                className="d-block w-100"
                                src={`data:image/jpeg;base64,${item.imagen}`}
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                <h3 style={{ backgroundColor: "#fff", opacity: 0.8, color: "#000" }}>{item.capsula.titulo}</h3>
                                <p style={{ backgroundColor: "#fff", opacity: 0.8, color: "#000" }}>{item.capsula.contenido}</p>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    })
                }

            </Carousel>

        </>
    )
}
