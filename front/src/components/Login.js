import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import "./login.css";
import { isLoggedIn } from "../actions";
import { connect } from "react-redux";
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
import  logoDiscogs  from "../logoDiscogs.svg";

function Login() {
  const [login, setLogin] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // async formSubmit(ev) {
  //   ev.preventDefault();
  //   try {
  //     const result = await Axios.post(`${IPserver}/api/login`, {
  //       login        });
  //     // if(result.data.token)
  //     if (result.data.token) {
  //       localStorage.setItem("token", result.data.token);
  //       this.setState({
  //         loggedIn: true
  //       });
  //     }
  //   } catch (err) {
  //     alert(err.response.data);
  //     this.setState({
  //       error: err.response.data
  //     });
  //   }
  // }

  useEffect(() => {
    Axios.post('/api/login', {
      username: {login},
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
                      width="50%"
                      src={logoDiscogs}
                      alt="Discogs Logo"
                    />

                    <Form>
                      <FormGroup>
                        <Label for="username">
                          Please enter your Discogs username to start exploring your collection
                        </Label>
                        <Input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="your Discogs username"
                        />
                      </FormGroup>
                    </Form>
                    <CardText></CardText>
                    <Row className="justify-content-center">
                      <Button>OK</Button>
                    </Row>
                  </CardBody>
                
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>{/* <Redirect to="/collection" /> */}</>
      )}
    </>
  );
}

function mstp(state) {
  return { isLoggedIn: state.isLoggedIn };
}

function mdtp(dispatch) {
  return {
    isLoggedIn: (isLoggedIn) => {
      dispatch(isLoggedIn(isLoggedIn));
    },
  };
}

export default connect(mstp, mdtp)(Login);
