import React, { Component, Fragment } from 'react'
import ContactSection from '../components/ContactsSection/ContactSection'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class AllServicesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="My Services"></TopNavigation>
        <PageTop pageTitle="My Services"></PageTop>
        <Services></Services>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default AllServicesPage