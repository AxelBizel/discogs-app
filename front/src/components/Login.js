import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import "./login.css";

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

  return (
    <>
      {loggedIn === false ? (
        <>
          <div className="flexContainerLogin">
            <div class="wrapperLogin fadeInDown">
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
                    onClicke={setLoggedIn(!loggedIn)}
                  />
                </form>

                {/* <div id="formFooter" class="fadeIn fourth">
                  <a class="underlineHover" href="/" onClick={this.onReturn}>
                    Retour
                  </a>
                </div> */}

              </div>
            </div>
          </div>
        </>
      ) : (
        <Redirect to="/collection" />
      )}
    </>
  );
}

export default Login;
