import React, { useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation.js";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { getYears, getYearsAdded, getGenres, getStyles } from "../actions";
import "../App.css";
import Loader from "./Loader";
import DashboardYearsChartJs from "./DashboardYearsRelease";
import DashboardYearsAdded from "./DashboardYearsAdded";
import DashboardGenres from "./DashboardGenres";
import DashboardStyles from "./DashboardStyles";

const Dashboard = props => {
  const { dispatch, years, yearsAdded, genres, styles } = props;

  useEffect(() => {
    dispatch(getYears());
    dispatch(getYearsAdded());
    dispatch(getGenres());
    dispatch(getStyles());
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

      <Row>
        {genres === null ? (
          <Loader />
        ) : (
          <DashboardGenres genres={genres.genres} />
        )}
      </Row>

      <Row>
        {styles === null ? (
          <Loader />
        ) : (
          <DashboardStyles
           styles={styles.styles} />
        )}
      </Row>
      
    </Container>
  );
};

function mstp(state) {
  return {
    years: state.years,
    yearsAdded:state.yearsAdded,
    genres:state.genres,
    styles:state.styles
  };
}

export default connect(mstp)(Dashboard);
