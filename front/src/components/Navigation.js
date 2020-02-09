import React from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {connect} from 'react-redux'
import { isLoggedIn } from "../actions";

const Navigation = () => {


  return (
    <div>
      <Nav tabs>
        <Col>
        <NavItem>
          <NavLink href="/">Collection</NavLink>
        </NavItem>
        </Col>
        <Col>
        <NavItem>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </NavItem>
        </Col>
        <Col>
        <NavItem>
          <NavLink href="/explore">Explore</NavLink>
        </NavItem>
        </Col>
        <Col>
        <NavItem>
          <NavLink href="/" onClick={()=>isLoggedIn(false)}>Login</NavLink>
        </NavItem>
        </Col>
      </Nav>
    </div>
  );
};


function mdtp(dispatch) {
  return {
    isLoggedIn: isLoggedIn => {
      dispatch(isLoggedIn(isLoggedIn));
    }
  };
}
export default connect(null, mdtp) (Navigation);
