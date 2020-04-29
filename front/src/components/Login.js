import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import {
  Container,
  Row,
  Col,
  Input,
  Card,
  Button,
  CardImg,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import logoDiscogs from "../assets/img/LogoApp.png";

function Login({collection, sortBy, filterBy, dispatch}) {
  const [login, setLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    if (loggedIn && login) {
      Axios.post("http://localhost:5000/api/login", {userName:login})
      }

    console.log("loggedIn", loggedIn);
    console.log("login", login);
  }, [loggedIn]);

  return (
    <>
      {loggedIn === false ? (
    <>
      {/* <div className="flexContainerLogin">
            <div className="wrapperLogin fadeInDown">
              <div id="formContent">
                
                <div class="fadeIn first">
                  <img
                    src={require("../logoDiscogs.svg")}
                    id="icon"
                    alt="User Icon"
                  />
                </div>

                <form id="formLogin">
                  <input
                    type="text"
                    id="login"
                    value={login}
                    class="fadeIn second"
                    onChange={e => setLogin(e.target.value)}
                    name="login"
                    placeholder="Identifiant"
                    className="inputForm"
                  />

                  <input
                    type="submit"
                    id="submitLogin"
                    class="fadeIn fourth"
                    value="Connexion"
                    className="inputForm submitLogin"
                    onClick={setLoggedIn(true)}
                  />
                </form>

                  </div>
            </div>
          </div> */}

      <Container>
        <Row className="justify-content-center">
          <Col xs="8" md="4">
            <Card data-aos="fade-down">
              <CardBody>
                <CardImg
                  top
                  width="100%"
                  src={logoDiscogs}
                  alt="Discogs Logo"
                  style={{ marginBottom: "2vh" }}
                />

                <Form>
                  <FormGroup>
                    <Label for="username">
                      Please enter your Discogs username to start exploring your
                      collection
                    </Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="your Discogs username"
                      onChange={(e) => setLogin(e.target.value)}
                    />
                  </FormGroup>
                </Form>
                <CardText></CardText>
                <Row className="justify-content-center">
                  <Button onClick={() => setLoggedIn(!loggedIn)}>OK</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    ) : (
      <>
        <Redirect to="/collection" />
      </>
    )}
    </>
  );
}

export default Login;
