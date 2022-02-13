import React, { useState, useEffect } from "react";
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import { isLoggedIn } from "../actions";
import Axios from "axios";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    if (!loggedIn) {
      Axios.post("http://localhost:5000/api/logout", { userName: "" });
    }
    console.log("loggedIn", loggedIn);
  }, [loggedIn]);

  return (
    <Nav
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        flexWrap: "nowrap",
      }}
    >
      <NavItem>
        <NavLink href="/collection">Collection</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/dashboard">Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/explore">Explore</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/" onClick={() => setLoggedIn(false)}>
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  );
};

function mdtp(dispatch) {
  return {
    isLoggedIn: (isLoggedIn) => {
      dispatch(isLoggedIn(isLoggedIn));
    },
  };
}
export default connect(null, mdtp)(Navigation);
