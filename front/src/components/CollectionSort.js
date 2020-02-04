import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { sortReleases } from "../actions";
import { connect } from "react-redux";

const CollectionSort = props => {
  const [dropdownOpen, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Artist A-Z");
  const toggle = () => setOpen(!dropdownOpen);
  const { sortReleases } = props;

  useEffect(() => {
    sortReleases(sortBy);
  }, [sortBy]);

  return (
    <Container>
      <Row>
        <Col>
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Sort by {sortBy}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setSortBy("Artist A-Z")}>
                Artist A-Z
              </DropdownItem>
              <DropdownItem onClick={() => setSortBy("Artist Z-A")}>
                Artist Z-A
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => setSortBy("Year (Asc)")}>
                Year (asc)
              </DropdownItem>
              <DropdownItem onClick={() => setSortBy("Year (Desc)")}>
                Year(desc)
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </Col>
      </Row>
    </Container>
  );
};

function mdtp(dispatch) {
  return {
    sortReleases: sortBy => {
      dispatch(sortReleases(sortBy));
    }
  };
}

export default connect(null, mdtp)(CollectionSort);
