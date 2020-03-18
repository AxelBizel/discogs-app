import React, { useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation.js";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getYears, getYearsAdded } from "../actions";
import "../App.css";
import Loader from "./Loader";
import DashboardYearsChartJs from "./DashboardYearsChartJs";
import DashboardYearsAdded from "./DashboardYearsAdded";

const Dashboard = props => {
  const { dispatch, years, yearsAdded } = props;

  useEffect(() => {
    dispatch(getYears());
    dispatch(getYearsAdded());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
   
      <Row>
        {years === null ? (
          <Loader />
        ) : (
          <DashboardYearsChartJs years={years.years} />
        )}
      </Row>

      <Row>
        {yearsAdded === null ? (
          <Loader />
        ) : (
          <DashboardYearsAdded yearsAdded={yearsAdded.yearsAdded} />
        )}
      </Row>
    </Container>
  );
};

function mstp(state) {
  return {
    years: state.years,
    yearsAdded:state.yearsAdded
  };
}

export default connect(mstp)(Dashboard);
