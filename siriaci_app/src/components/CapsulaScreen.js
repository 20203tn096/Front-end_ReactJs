import React, {useEffect, useState} from 'react'
import { CapsulaCard } from './capsula/CapsulaCard'
import { Row, Col } from 'react-bootstrap'
import axios from '../shared/plugins/axios'
import { Button } from 'react-bootstrap'
import {ButtonCircle} from "../shared/components/ButtonCircle"
import  CapsulaForm  from './capsula/CapsulaForm'
import { NavPrincipal } from '../shared/components/Navbs/NavPrincipal'
import { Container } from 'react-bootstrap'
export const CapsulaScreen = () => {
    const [images, setImages] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [responsables, setResponsables] = useState([])


    const getResponsables = () =>{
        axios({ url: "/responsables/", method: "GET" })
        .then((response) => {
            setResponsables(response.data);
            console.log(responsables)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const getImages = () =>{
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
        getImages();
        getResponsables();
    }, []);

    
    return (
        <>
        <Container>
        <Row className='justify-content-lg-center'>
            <Col className="mt-5">
                <CapsulaCard images = {images}/>
            </Col>
            <Col>
            <CapsulaForm
             isOpen={isOpen}
             responsables={responsables}
             onClose={() => setOpen(false)}
            />
            <ButtonCircle
                type={"btn btn-success btn-circle"}
                onClickFunct={() => setOpen(true)}
                icon="plus"
                size={20}
              />
            </Col>
        </Row>
        </Container>
    </>
      
    )
}
