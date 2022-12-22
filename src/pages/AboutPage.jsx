import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import AboutMe from '../components/AboutMe/AboutMe'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="About Me"></TopNavigation>
        <PageTop pageTitle="About Me"></PageTop>
        <AboutMe></AboutMe>
        <AboutDescription></AboutDescription>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default AboutPage