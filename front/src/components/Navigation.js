import React from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

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
          <NavLink href="/">Login</NavLink>
        </NavItem>
        </Col>
      </Nav>
    </div>
  );
};

export default Navigation;
