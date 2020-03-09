import React, { useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation.js";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getYears } from "../actions";
import "../App.css";
import Loader from "./Loader";
import DashboardYearsRelease from "./DashboardYearsRelease";
import DashboardYearsD3 from "./DashBoardYearsD3";
import DashboardYearsChartJs from "./DashboardYearsChartJs";

const Dashboard = props => {
  const { dispatch, years } = props;

  useEffect(() => {
    dispatch(getYears());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      {/* <Row>
        {years === null ? (
          <Loader />
        ) : (
          <DashboardYearsRelease years={years.years} />
        )}
      </Row>
      <Row>
        {years === null ? <Loader /> : <DashboardYearsD3 years={years.years} />}
      </Row> */}
      <Row>
        {years === null ? <Loader /> : <DashboardYearsChartJs years={years.years} />}
      </Row>
    </Container>
  );
};

function mstp(state) {
  console.log("Dashboard mstp", state.years);
  return {
    years: state.years
  };
}

// function mdtp(dispatch) {
//     return {
//       getYears: () => {
//         dispatch(getYears());
//       }
//     };
//   };

export default connect(mstp)(Dashboard);
