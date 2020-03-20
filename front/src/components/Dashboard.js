import React, { useEffect } from 'react'
import Header from './Header'
import Navigation from './Navigation.js'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import {
  getYears,
  getYearsAdded,
  getGenres,
  getStyles,
  getReleases
} from '../actions'
import '../App.css'
import Loader from './Loader'
import DashboardYearsChartJs from './DashboardYearsRelease'
import DashboardYearsAdded from './DashboardYearsAdded'
import DashboardGenres from './DashboardGenres'
import DashboardStyles from './DashboardStyles'
import CountUp from 'react-countup'

const Dashboard = props => {
  const { dispatch, years, yearsAdded, genres, styles, collection } = props

  useEffect(() => {
    dispatch(getYears())
    dispatch(getYearsAdded())
    dispatch(getGenres())
    dispatch(getStyles())
    dispatch(getReleases())
  }, [dispatch])

  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 style={{ textAlign: 'center', marginTop: '5vh' }}>
            You got{' '}
            <span style={{fontSize:'2.5rem'}}>
              <CountUp end={collection === null ? 0 : collection.length} />
            </span>{' '}
            releases in your collection
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs='12' md='6' data-aos='fade-right' data-aos-duration='1000'>
          {years === null ? (
            <Loader />
          ) : (
            <div className='chartContainer'>
              <h4 className='titleChart'>Repartition by release year</h4>
              <p>In numbers of release</p>
              <DashboardYearsChartJs years={years.years} />
            </div>
          )}

          {yearsAdded === null ? (
            <Loader />
          ) : (
            <div className='chartContainer'>
              <h4 className='titleChart'>Repartition by add date</h4>
              <p>In cumulative numbers of release</p>
              <DashboardYearsAdded yearsAdded={yearsAdded.yearsAdded} />
            </div>
          )}

          {genres === null ? (
            <Loader />
          ) : (
            <div className='chartContainer'>
              <h4 className='titleChart'>Repartition by genres</h4>
              <p>In numbers of release</p>
              <DashboardGenres genres={genres.genres} />
            </div>
          )}
        </Col>

        <Col xs='12' md='6' data-aos='fade-left' data-aos-duration='1000'>
          {styles === null ? (
            <Loader />
          ) : (
            <div className='chartContainer'>
              <h4 className='titleChart'>Répartition par styles</h4>
              <p>En nombre de disques</p>
              <DashboardStyles styles={styles.styles} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

function mstp (state) {
  return {
    years: state.years,
    yearsAdded: state.yearsAdded,
    genres: state.genres,
    styles: state.styles,
    collection: state.collection.collection
  }
}

export default connect(mstp)(Dashboard)
