import React, { useState, useEffect } from "react";
import { Row, Col, Form, Card, Button, Container, Figure } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import axios from "../../../shared/plugins/axios";
import { CapsulaCard2 } from "../../capsula/CapsulaCard2";
import { useFormik } from "formik";
import * as yup from "yup";
import img from "../../../assets/img/utez.png"
import { NavAdministrador } from "../../../shared/components/Navbs/NavAdministrador";
import { LoginScreen } from "../LoginScreen";
import "../../../assets/css/custom-styles.css";

const LoginForm = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("")
  const [images, setImages] = useState([]);
  const getImages = () => {
    axios({ url: "/image_capsula/", method: "GET" })
      .then((response) => {
        setImages(response.data);
        console.log(images);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getImages();
  }, []);

  const handleClose = () => {
    formik.resetForm();
    //resetear el formulario
  };

  const formik = useFormik({
    initialValues: {
      correo: "",
      contrasena: "",
    },
    validationSchema: yup.object().shape({
      correo: yup.string().required("Campo obligatorio"),
      contrasena: yup
        .string()
        .required("Campo obligatorio")
        .min(6, "Minimo 6 caracteres"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios({
        url: "/usuario/login",
        method: "POST",
        data: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.error) {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const login = () => {
    const CORREO = "omar@gmail.com";
    const PASSWORD = "12345"
    console.log(correo)
    console.log(contrasena)

    console.log(correo == CORREO && contrasena == PASSWORD);
    if (correo == CORREO && contrasena == PASSWORD) {
      return (<NavAdministrador />)
    } else {
      return (<LoginScreen />)
    }
  }

  return (
    <section className="h-100 gradient-form">
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col className="col-xl-10">
            <div className="card text-black box">
              <Row className="g-0">
                <Col className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4 ">
                    <div className="text-center">
                      <Figure>
                        <Figure.Image src={img} width={200} height={150} alt="Marketplace" />
                      </Figure>
                      <h4 className="mt-1 mb-5 pb-1">SIRIACI</h4>
                    </div>
                    <Form >
                      <Form.Group className="form-outline mb-4">
                        <Form.Label htmlFor="username"> Correo electronico</Form.Label>
                        <Form.Control name="username" id="username" placerholder="omarmorales" onChange={(event) => setCorreo(event.target.value)} />
                      </Form.Group>
                      <Form.Group className="form-outline mb-4">
                        <Form.Label htmlFor="password"> Contraseña</Form.Label>
                        <Form.Control name="password" id="password" placeholder="************" onChange={(event) => setContrasena(event.target.value)} />
                      </Form.Group>
                      <Form.Group className="form-outline mb-4">
                        <div className="text-end pt-1 pb-1">
                          <a href={NavAdministrador} className="text-muted">
                            ¿Olvidaste tu contraseña?
                          </a>
                        </div>
                      </Form.Group>
                      <Form.Group className="form-outline mb-4">
                        <div className="text-center pt-1 pb-1">
                          <Button
                            variant="secondary"
                            className="btn-hover gradient-custom-3"
                            onClick={login}
                          >
                            <FeatherIcon icon="log-in" />
                            &nbsp; Iniciar sesión
                          </Button>
                        </div>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col className="col-lg-6 d-flex align-items-center gradient-custom-2" >
                  <Row className="mb-2">
                    <div className="mb-5 text-center mt-2">
                      <h4 style={{ backgroundColor: "#FFF", marginLeft: 80, marginRight: 80 }} >Capsulas Informativas</h4>
                    </div>
                    <div>
                      <CapsulaCard2
                        images={images}
                      />
                    </div>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginForm;
