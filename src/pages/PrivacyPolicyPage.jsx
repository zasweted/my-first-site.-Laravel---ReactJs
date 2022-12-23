import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Privacy Policy"></TopNavigation>
        <PageTop pageTitle="Privacy Policy"></PageTop>
        <PrivacyPolicy></PrivacyPolicy>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default PrivacyPolicyPage