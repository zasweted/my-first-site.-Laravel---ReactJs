import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TermsAndConditions from '../components/TermsAndConditions/TermsAndConditions'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class TermsAndConditionsPage extends Component {
  componentDidMount()
  {
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms And Conditions"></TopNavigation>
        <PageTop pageTitle="Terms And Conditions"></PageTop>
        <TermsAndConditions></TermsAndConditions>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default TermsAndConditionsPage