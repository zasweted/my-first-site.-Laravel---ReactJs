import React, { Component, Fragment } from 'react'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <PageTop pageTitle="Our Portfolio"></PageTop>
        <AllProjects></AllProjects>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default PortfolioPage